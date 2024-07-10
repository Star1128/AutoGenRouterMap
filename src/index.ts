/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as path from "path";
import { readFileSync, constants } from "node:fs";
import ts, { StringLiteral } from "typescript";
import Handlebars from "handlebars";
import { accessSync, existsSync, mkdirSync, readdirSync, writeFileSync, statSync } from "fs";
import { HvigorNode, HvigorPlugin } from "@ohos/hvigor";
import { json } from "stream/consumers";
import { join } from 'path';

const PLUGIN_ID = "etsGeneratorPlugin";
const ROUTER_BUILDER_PATH = "src/main/ets/generated";
const ROUTER_BUILDER_NAME = "RouterBuilder.ets";
const ROUTER_MAP_PATH = "src/main/resources/base/profile";
const ROUTER_ANNOTATION_NAME = "AppRouter";
const ROUTER_BUILDER_TEMPLATE = "viewBuilder.tpl";

class NodeInfo {
  value?: any;
}

interface TemplateModel {
  viewList: ViewInfo[];
}

// 用于生成组件注册类
class ViewInfo {
  // 自定义组件的名字
  viewName?: string;
  // import路径
  importPath?: string;
  // 组件注册方法名
  functionName?: string;
  // 方法是否有参数
  param?: string;
}

class RouterInfo {
  // 路由名，自定义装饰器中配置的参数值
  name?: string;
  // 模块名
  // pageModule?: string;
  // 加载的页面的路径
  pageSourceFile?: string;
  // 注册路由的方法
  buildFunction?: string;
  data?: Data;
}

class Data {
  description?: string;
}

// 路由表
interface RouterMap {
  routerMap: RouterInfo[];
}

// 配置文件，在hvigor中配置
export class PluginConfig {
  // 注册路由的方法的文件名
  builderFileName?: string;
  // 注册路由的方法的文件路径
  builderDir?: string;
  // 路由表所在路径
  routerMapDir?: string;
  // 模块名
  moduleName?: string;
  // 模块路径
  modulePath?: string;
  // 装饰器名称
  annotation?: string;
  // 扫描的文件路径
  // scanFiles?: string[];
  scanDir?: string;
  // 查找生成struct的关键字
  viewKeyword?: string[];
  // 生成代码模板
  builderTpl?: string;
}

// 文件解析结果
class AnalyzeResult {
  // 加载的组件名
  viewName?: string;
  // 组件注册方法名
  functionName?: string;
  // 路由中配置的路径
  name?: string;
  // 路由中传递的参数
  param?: string;
}

// ets文件解析
export class EtsAnalyzer {
  // 文件路径
  sourcePath: string;
  // hvigor配置
  pluginConfig: PluginConfig;
  // 解析结果
  analyzeResult: AnalyzeResult = new AnalyzeResult();
  // 关键字位置
  keywordPos: number = 0;
  // 是否存在装饰器
  routerAnnotationExisted: boolean = false;

  constructor(pluginConfig: PluginConfig, sourcePath: string) {
    this.pluginConfig = pluginConfig;
    this.sourcePath = sourcePath;
  }

  start() {
    // 读取文件
    const sourceCode = readFileSync(this.sourcePath, "utf-8");
    // 解析文件，生成节点树信息
    const sourceFile = ts.createSourceFile(this.sourcePath, sourceCode, ts.ScriptTarget.ES2021, false);
    // 遍历节点信息
    ts.forEachChild(sourceFile, (node: ts.Node) => {
      // 解析节点
      this.resolveNode(node);
    });
  }

  resolveNode(node: ts.Node): NodeInfo | undefined {
    switch (node.kind) {
    // import节点（如 import * as path from "path";）
      case ts.SyntaxKind.ImportDeclaration:
        this.resolveImportDeclaration(node);
        break;
    // 未知的声明节点
      case ts.SyntaxKind.MissingDeclaration:
        this.resolveMissDeclaration(node);
        break;
    // 装饰器节点
      case ts.SyntaxKind.Decorator:
        this.resolveDecoration(node);
        break;
    // 函数调用节点
      case ts.SyntaxKind.CallExpression:
        this.resolveCallExpression(node);
        break;
    // 表达式节点
      case ts.SyntaxKind.ExpressionStatement:
        this.resolveExpression(node);
        break;
    // 标识符节点
      case ts.SyntaxKind.Identifier:
        return this.resolveIdentifier(node);
    // 字符串节点
      case ts.SyntaxKind.StringLiteral:
        return this.resolveStringLiteral(node);
    // 对象赋值节点
      case ts.SyntaxKind.PropertyAssignment:
        return this.resolvePropertyAssignment(node);
    }
  }

  // import节点，不做操作
  resolveImportDeclaration(node: ts.Node) {
    let importDeclaration = node as ts.ImportDeclaration;
  }

  // 未知节点，则继续解析子节点
  resolveMissDeclaration(node: ts.Node) {
    node.forEachChild((cnode) => {
      this.resolveNode(cnode);
    })
  }

  // 解析装饰器
  resolveDecoration(node: ts.Node) {
    // 转换为装饰器节点类型
    let decorator = node as ts.Decorator;
    // 判断表达式是否是函数调用
    if (decorator.expression.kind === ts.SyntaxKind.CallExpression) {
      const callExpression = decorator.expression as ts.CallExpression;
      // 表达式类型是否是标识符
      if (callExpression.expression.kind === ts.SyntaxKind.Identifier) {
        const identifier = callExpression.expression as ts.Identifier;
        // 标识符是否是自定义的装饰器
        if (identifier.text === this.pluginConfig.annotation) {
          this.routerAnnotationExisted = true;
          const arg = callExpression.arguments[0];
          // 调用方法的第一个参数是否是表达式
          if (arg.kind === ts.SyntaxKind.ObjectLiteralExpression) {
            const properties = (arg as ts.ObjectLiteralExpression).properties;
            // 遍历装饰器中的所有参数
            properties.forEach((propertie) => {
              if (propertie.kind === ts.SyntaxKind.PropertyAssignment) {
                // 参数是否是自定义装饰器中的变量名
                if ((propertie.name as ts.Identifier).escapedText === "name") {
                  // 将装饰器中的变量的值赋值给解析结果中的变量
                  this.analyzeResult.name = (propertie.initializer as ts.StringLiteral).text;
                }
                if ((propertie.name as ts.Identifier).escapedText === "hasParam") {
                  // 将装饰器中的变量的值赋值给解析结果中的变量
                  this.analyzeResult.param = propertie.initializer.kind === ts.SyntaxKind.TrueKeyword ? "param: ESObject" : "";
                }
              }
            })

          }
        }
      }
    }
  }

  // 解析函数调用
  resolveCallExpression(node: ts.Node) {
    let args = node as ts.CallExpression;
    let identifier = this.resolveNode(args.expression);
    this.parseRouterConfig(args.arguments, identifier);
  }

  // 解析函数
  resolveExpression(node: ts.Node) {
    let args = node as ts.ExpressionStatement;
    let identifier = this.resolveNode(args.expression);
    if (this.analyzeResult?.name?.endsWith(identifier?.value)) {
      this.analyzeResult.viewName = identifier?.value;
      let viewName: string = identifier?.value.toString();
      viewName = `${viewName.charAt(0).toLowerCase()}${viewName.slice(1, viewName.length)}`;
      this.analyzeResult.functionName = viewName;
    }
  }

  // 解析表达式
  resolveIdentifier(node: ts.Node): NodeInfo {
    let identifier = node as ts.Identifier;
    let info = new NodeInfo();
    info.value = identifier.escapedText.toString();
    return info;
  }

  // 解析字符串
  resolveStringLiteral(node: ts.Node): NodeInfo {
    let stringLiteral = node as ts.StringLiteral;
    let info = new NodeInfo();
    info.value = stringLiteral.text;
    return info;
  }

  // 解析属性赋值
  resolvePropertyAssignment(node: ts.Node): NodeInfo {
    let propertyAssignment = node as ts.PropertyAssignment;
    let propertyName = this.resolveNode(propertyAssignment.name)?.value;
    let propertyValue = this.resolveNode(propertyAssignment.initializer)?.value;
    let info = new NodeInfo();
    info.value = {
      key: propertyName,
      value: propertyValue
    }
    return info;
  }

  // 解析路由配置
  parseRouterConfig(node: ts.NodeArray<ts.Expression>, nodeInfo?: NodeInfo) {
    if (nodeInfo?.value === this.pluginConfig.annotation) {
      node.flatMap((e: ts.Expression) => {
        ((e as ts.ObjectLiteralExpression).properties).forEach((e: ts.ObjectLiteralElementLike) => {
          this.parseConfig(e, this.analyzeResult);
        })
      });
    }
  }

  parseConfig(node: ts.ObjectLiteralElementLike, analyzeResult: AnalyzeResult) {
    let info = this.resolveNode(node);
    Reflect.set(analyzeResult, info?.value["key"], info?.value["value"]);
  }
}

// hvigor中配置的插件方法
export function etsGeneratorPlugin(pluginConfig: PluginConfig): HvigorPlugin {
  pluginConfig.annotation = ROUTER_ANNOTATION_NAME;
  pluginConfig.builderTpl = ROUTER_BUILDER_TEMPLATE;
  pluginConfig.routerMapDir = ROUTER_MAP_PATH;
  pluginConfig.builderDir = ROUTER_BUILDER_PATH;
  pluginConfig.builderFileName = ROUTER_BUILDER_NAME;
  return {
    pluginId: PLUGIN_ID,
    apply(node: HvigorNode) {
      console.log(`Exec ${PLUGIN_ID}...${__dirname}`);
      console.log(`node:${node.getNodeName},nodePath:${node.getNodePath()}`);
      // 获取模块名
      pluginConfig.moduleName = node.getNodeName();
      // 获取模块路径
      pluginConfig.modulePath = node.getNodePath();
      pluginExec(pluginConfig);
    }
  }
}

// 解析插件开始执行
function pluginExec(config: PluginConfig) {
  console.log("plugin exec...");
  console.log(`scanDir = ${config.scanDir}`);
  const templateModel: TemplateModel = {
    viewList: []
  };
  const routerMap: RouterMap = {
    routerMap: []
  };
  // 读取指定自定义组件目录下的文件
  const scanPath = `${config.modulePath}/${config.scanDir}`;
  const files: string[] = getFiles(scanPath);
  // 遍历需要扫描的文件列表
  files.forEach((file) => {
    console.log(`detacted file: ${file}`);
    // 文件绝对路径
    let sourcePath = `${file}`;
    if (!sourcePath.endsWith('.ets')) {
      return;
    }
    // 获取文件相对路径
    const importPath = path.relative(`${config.modulePath}/${config.builderDir}`, sourcePath).replaceAll("\\", "/").replaceAll(".ets", "");
    const analyzer = new EtsAnalyzer(config, sourcePath);
    // 开始解析文件
    analyzer.start();
    console.log(JSON.stringify(analyzer.analyzeResult));
    console.log(importPath);
    // 如果解析的文件中存在装饰器，则将结果保存到列表中
    if (analyzer.routerAnnotationExisted) {
      templateModel.viewList.push({
        viewName: analyzer.analyzeResult.viewName,
        importPath: importPath,
        functionName: analyzer.analyzeResult.functionName,
        param: analyzer.analyzeResult.param === undefined ? "" : analyzer.analyzeResult.param
      });
      routerMap.routerMap.push({
        name: analyzer.analyzeResult.name,
        // pageModule: config.moduleName,
        pageSourceFile: `${config.builderDir}/${config.builderFileName}`,
        buildFunction: `${analyzer.analyzeResult.functionName}Builder`,
        data: {
          description: ""
        }
      });
    }

  });
  // 生成路由方法文件
  generateBuilder(templateModel, config);
  // 生成路由表文件
  generateRouterMap(routerMap, config);
  // 生成Index.ets文件
  generateIndex(config);
}


function getFiles(dir: string): string[] {
  return readdirSync(dir).reduce((files, file) => {
    const name = join(dir, file);
    const isDirectory = statSync(name).isDirectory();
    return isDirectory ? [...files, ...getFiles(name)] : [...files, name];
  }, []);
}

// 根据模板生成路由方法文件
function generateBuilder(templateModel: TemplateModel, config: PluginConfig) {
  console.log(JSON.stringify(templateModel));
  const builderPath = path.resolve(__dirname, `../${config.builderTpl}`);
  const tpl = readFileSync(builderPath, { encoding: "utf8" });
  const template = Handlebars.compile(tpl);
  const output = template({
    viewList: templateModel.viewList
  });

  const routerBuilderDir = `${config.modulePath}/${config.builderDir}`;
  if (!existsSync(routerBuilderDir)) {
    mkdirSync(routerBuilderDir, { recursive: true });
  }
  writeFileSync(`${routerBuilderDir}/${config.builderFileName}`, output, { encoding: "utf8" });
}

// 以json的格式生成路由表
function generateRouterMap(routerMap: RouterMap, config: PluginConfig) {
  const jsonOutput = JSON.stringify(routerMap, null, 2);
  const routerMapDir = `${config.modulePath}/${config.routerMapDir}`;
  if (!existsSync(routerMapDir)) {
    mkdirSync(routerMapDir, { recursive: true });
  }
  writeFileSync(`${routerMapDir}/router_map.json`, jsonOutput, { encoding: "utf8" });
}

// 生成Index.ets，导出路由方法
function generateIndex(config: PluginConfig) {
  const indexPath = `${config.modulePath}/Index.ets`;
  if (!existsSync(indexPath)) {
    writeFileSync(indexPath, '', 'utf-8');
  }
  let indexContent: string = readFileSync(indexPath, { encoding: "utf8" });
  if (!indexContent.includes(" * Copyright (c) 2024 Huawei Device Co., Ltd.\r")) {
    const licensesPath = path.resolve(__dirname, `../license.tpl`);
    const licenses: string = readFileSync(licensesPath, { encoding: "utf-8" });
    indexContent = licenses + "\n" + indexContent;
  }
  const indexArr: string[] = indexContent.split("\n");
  const indexArray: string[] = [];
  indexArr.forEach((value: string) => {
    if (!value.includes(config?.builderDir.toString())) {
      indexArray.push(value);
    }
  });
  indexArray.push(`export * from './${config.builderDir}/${config.builderFileName?.replace(".ets", "")}';`);
  writeFileSync(indexPath, indexArray.join("\n"), { encoding: "utf8" });
}