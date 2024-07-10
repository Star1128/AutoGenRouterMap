/// <reference types="node" />
import { AbilityTypeEnum } from '../enum/ability-type-enum.js';
/**
 * 调用loader所需的环境变量
 */
export interface LoaderEnv extends NodeJS.ProcessEnv {
    /**
     * fa模型中标识该ability的类型
     */
    abilityType?: AbilityTypeEnum;
    /**
     * fa模型中运行态需要的配置文件
     */
    aceManifestPath?: string;
    /**
     * 资源id文件resourceTable.txt
     */
    appResource: string;
    /**
     * 资源rawfile文件目录
     */
    rawFileResource: string;
    /**
     * 源码文件
     */
    aceModuleRoot: string;
    /**
     * 编译后的产物输出目录
     */
    aceModuleBuild: string;
    /**
     * 临时缓存目录
     */
    cachePath: string;
    /**
     * 低代码目录
     */
    aceSuperVisualPath?: string;
    /**
     * 编译时的配置文件
     */
    aceBuildJson?: string;
    /**
     * stage模型配置的页面路径
     */
    aceProfilePath?: string;
    /**
     * stage模型编译后的module.json路径
     */
    aceModuleJsonPath?: string;
    /**
     * 模块build-profile中target的runtimeOS
     */
    runtimeOS?: string;
    /**
     * 编译使用的sdk参数
     */
    sdkInfo?: string;
}
