"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EtsAnalyzer = exports.PluginConfig = void 0;
exports.etsGeneratorPlugin = etsGeneratorPlugin;
const path = __importStar(require("path"));
const node_fs_1 = require("node:fs");
const typescript_1 = __importDefault(require("typescript"));
const handlebars_1 = __importDefault(require("handlebars"));
const fs_1 = require("fs");
const path_1 = require("path");
const PLUGIN_ID = "etsGeneratorPlugin";
const ROUTER_BUILDER_PATH = "src/main/ets/generated";
const ROUTER_BUILDER_NAME = "RouterBuilder.ets";
const ROUTER_MAP_PATH = "src/main/resources/base/profile";
const ROUTER_ANNOTATION_NAME = "AppRouter";
const ROUTER_BUILDER_TEMPLATE = "viewBuilder.tpl";
class NodeInfo {
}
// 用于生成组件注册类
class ViewInfo {
}
class RouterInfo {
}
class Data {
}
// 配置文件，在hvigor中配置
class PluginConfig {
}
exports.PluginConfig = PluginConfig;
// 文件解析结果
class AnalyzeResult {
}
// ets文件解析
class EtsAnalyzer {
    constructor(pluginConfig, sourcePath) {
        // 解析结果
        this.analyzeResult = new AnalyzeResult();
        // 关键字位置
        this.keywordPos = 0;
        // 是否存在装饰器
        this.routerAnnotationExisted = false;
        this.pluginConfig = pluginConfig;
        this.sourcePath = sourcePath;
    }
    start() {
        // 读取文件
        const sourceCode = (0, node_fs_1.readFileSync)(this.sourcePath, "utf-8");
        // 解析文件，生成节点树信息
        const sourceFile = typescript_1.default.createSourceFile(this.sourcePath, sourceCode, typescript_1.default.ScriptTarget.ES2021, false);
        // 遍历节点信息
        typescript_1.default.forEachChild(sourceFile, (node) => {
            // 解析节点
            this.resolveNode(node);
        });
    }
    resolveNode(node) {
        switch (node.kind) {
            // import节点（如 import * as path from "path";）
            case typescript_1.default.SyntaxKind.ImportDeclaration:
                this.resolveImportDeclaration(node);
                break;
            // 未知的声明节点
            case typescript_1.default.SyntaxKind.MissingDeclaration:
                this.resolveMissDeclaration(node);
                break;
            // 装饰器节点
            case typescript_1.default.SyntaxKind.Decorator:
                this.resolveDecoration(node);
                break;
            // 函数调用节点
            case typescript_1.default.SyntaxKind.CallExpression:
                this.resolveCallExpression(node);
                break;
            // 表达式节点
            case typescript_1.default.SyntaxKind.ExpressionStatement:
                this.resolveExpression(node);
                break;
            // 标识符节点
            case typescript_1.default.SyntaxKind.Identifier:
                return this.resolveIdentifier(node);
            // 字符串节点
            case typescript_1.default.SyntaxKind.StringLiteral:
                return this.resolveStringLiteral(node);
            // 对象赋值节点
            case typescript_1.default.SyntaxKind.PropertyAssignment:
                return this.resolvePropertyAssignment(node);
        }
    }
    // import节点，不做操作
    resolveImportDeclaration(node) {
        let importDeclaration = node;
    }
    // 未知节点，则继续解析子节点
    resolveMissDeclaration(node) {
        node.forEachChild((cnode) => {
            this.resolveNode(cnode);
        });
    }
    // 解析装饰器
    resolveDecoration(node) {
        // 转换为装饰器节点类型
        let decorator = node;
        // 判断表达式是否是函数调用
        if (decorator.expression.kind === typescript_1.default.SyntaxKind.CallExpression) {
            const callExpression = decorator.expression;
            // 表达式类型是否是标识符
            if (callExpression.expression.kind === typescript_1.default.SyntaxKind.Identifier) {
                const identifier = callExpression.expression;
                // 标识符是否是自定义的装饰器
                if (identifier.text === this.pluginConfig.annotation) {
                    this.routerAnnotationExisted = true;
                    const arg = callExpression.arguments[0];
                    // 调用方法的第一个参数是否是表达式
                    if (arg.kind === typescript_1.default.SyntaxKind.ObjectLiteralExpression) {
                        const properties = arg.properties;
                        // 遍历装饰器中的所有参数
                        properties.forEach((propertie) => {
                            if (propertie.kind === typescript_1.default.SyntaxKind.PropertyAssignment) {
                                // 参数是否是自定义装饰器中的变量名
                                if (propertie.name.escapedText === "name") {
                                    // 将装饰器中的变量的值赋值给解析结果中的变量
                                    this.analyzeResult.name = propertie.initializer.text;
                                }
                                if (propertie.name.escapedText === "hasParam") {
                                    // 将装饰器中的变量的值赋值给解析结果中的变量
                                    this.analyzeResult.param = propertie.initializer.kind === typescript_1.default.SyntaxKind.TrueKeyword ? "param: ESObject" : "";
                                }
                            }
                        });
                    }
                }
            }
        }
    }
    // 解析函数调用
    resolveCallExpression(node) {
        let args = node;
        let identifier = this.resolveNode(args.expression);
        this.parseRouterConfig(args.arguments, identifier);
    }
    // 解析函数
    resolveExpression(node) {
        let args = node;
        let identifier = this.resolveNode(args.expression);
        if (this.analyzeResult?.name?.endsWith(identifier?.value)) {
            this.analyzeResult.viewName = identifier?.value;
            let viewName = identifier?.value.toString();
            viewName = `${viewName.charAt(0).toLowerCase()}${viewName.slice(1, viewName.length)}`;
            this.analyzeResult.functionName = viewName;
        }
    }
    // 解析表达式
    resolveIdentifier(node) {
        let identifier = node;
        let info = new NodeInfo();
        info.value = identifier.escapedText.toString();
        return info;
    }
    // 解析字符串
    resolveStringLiteral(node) {
        let stringLiteral = node;
        let info = new NodeInfo();
        info.value = stringLiteral.text;
        return info;
    }
    // 解析属性赋值
    resolvePropertyAssignment(node) {
        let propertyAssignment = node;
        let propertyName = this.resolveNode(propertyAssignment.name)?.value;
        let propertyValue = this.resolveNode(propertyAssignment.initializer)?.value;
        let info = new NodeInfo();
        info.value = {
            key: propertyName,
            value: propertyValue
        };
        return info;
    }
    // 解析路由配置
    parseRouterConfig(node, nodeInfo) {
        if (nodeInfo?.value === this.pluginConfig.annotation) {
            node.flatMap((e) => {
                (e.properties).forEach((e) => {
                    this.parseConfig(e, this.analyzeResult);
                });
            });
        }
    }
    parseConfig(node, analyzeResult) {
        let info = this.resolveNode(node);
        Reflect.set(analyzeResult, info?.value["key"], info?.value["value"]);
    }
}
exports.EtsAnalyzer = EtsAnalyzer;
// hvigor中配置的插件方法
function etsGeneratorPlugin(pluginConfig) {
    pluginConfig.annotation = ROUTER_ANNOTATION_NAME;
    pluginConfig.builderTpl = ROUTER_BUILDER_TEMPLATE;
    pluginConfig.routerMapDir = ROUTER_MAP_PATH;
    pluginConfig.builderDir = ROUTER_BUILDER_PATH;
    pluginConfig.builderFileName = ROUTER_BUILDER_NAME;
    return {
        pluginId: PLUGIN_ID,
        apply(node) {
            console.log(`Exec ${PLUGIN_ID}...${__dirname}`);
            console.log(`node:${node.getNodeName},nodePath:${node.getNodePath()}`);
            // 获取模块名
            pluginConfig.moduleName = node.getNodeName();
            // 获取模块路径
            pluginConfig.modulePath = node.getNodePath();
            pluginExec(pluginConfig);
        }
    };
}
// 解析插件开始执行
function pluginExec(config) {
    console.log("plugin exec...");
    console.log(`scanDir = ${config.scanDir}`);
    const templateModel = {
        viewList: []
    };
    const routerMap = {
        routerMap: []
    };
    // 读取指定自定义组件目录下的文件
    const scanPath = `${config.modulePath}/${config.scanDir}`;
    const files = getFiles(scanPath);
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
function getFiles(dir) {
    return (0, fs_1.readdirSync)(dir).reduce((files, file) => {
        const name = (0, path_1.join)(dir, file);
        const isDirectory = (0, fs_1.statSync)(name).isDirectory();
        return isDirectory ? [...files, ...getFiles(name)] : [...files, name];
    }, []);
}
// 根据模板生成路由方法文件
function generateBuilder(templateModel, config) {
    console.log(JSON.stringify(templateModel));
    const builderPath = path.resolve(__dirname, `../${config.builderTpl}`);
    const tpl = (0, node_fs_1.readFileSync)(builderPath, { encoding: "utf8" });
    const template = handlebars_1.default.compile(tpl);
    const output = template({
        viewList: templateModel.viewList
    });
    const routerBuilderDir = `${config.modulePath}/${config.builderDir}`;
    if (!(0, fs_1.existsSync)(routerBuilderDir)) {
        (0, fs_1.mkdirSync)(routerBuilderDir, { recursive: true });
    }
    (0, fs_1.writeFileSync)(`${routerBuilderDir}/${config.builderFileName}`, output, { encoding: "utf8" });
}
// 以json的格式生成路由表
function generateRouterMap(routerMap, config) {
    const jsonOutput = JSON.stringify(routerMap, null, 2);
    const routerMapDir = `${config.modulePath}/${config.routerMapDir}`;
    if (!(0, fs_1.existsSync)(routerMapDir)) {
        (0, fs_1.mkdirSync)(routerMapDir, { recursive: true });
    }
    (0, fs_1.writeFileSync)(`${routerMapDir}/router_map.json`, jsonOutput, { encoding: "utf8" });
}
// 生成Index.ets，导出路由方法
function generateIndex(config) {
    const indexPath = `${config.modulePath}/Index.ets`;
    if (!(0, fs_1.existsSync)(indexPath)) {
        (0, fs_1.writeFileSync)(indexPath, '', 'utf-8');
    }
    let indexContent = (0, node_fs_1.readFileSync)(indexPath, { encoding: "utf8" });
    if (!indexContent.includes(" * Copyright (c) 2024 Huawei Device Co., Ltd.\r")) {
        const licensesPath = path.resolve(__dirname, `../license.tpl`);
        const licenses = (0, node_fs_1.readFileSync)(licensesPath, { encoding: "utf-8" });
        indexContent = licenses + "\n" + indexContent;
    }
    const indexArr = indexContent.split("\n");
    const indexArray = [];
    indexArr.forEach((value) => {
        if (!value.includes(config?.builderDir.toString())) {
            indexArray.push(value);
        }
    });
    indexArray.push(`export * from './${config.builderDir}/${config.builderFileName?.replace(".ets", "")}';`);
    (0, fs_1.writeFileSync)(indexPath, indexArray.join("\n"), { encoding: "utf8" });
}
//# sourceMappingURL=index.js.map