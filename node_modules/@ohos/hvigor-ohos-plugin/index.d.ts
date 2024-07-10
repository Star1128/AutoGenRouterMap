import { Module, Project } from '@ohos/hvigor';
/**
 * Stage模型的hap插件
 *
 * @param module hvigorModule
 */
export declare const hapTasks: (module: Module) => import("./src/plugin/common/abstract-hap-module-plugin.js").AbstractHapModulePlugin;
/**
 * Fa模型的hap插件
 *
 * @param module hvigorModule
 */
export declare const legacyHapTasks: (module: Module) => import("./src/plugin/common/abstract-hap-module-plugin.js").AbstractHapModulePlugin;
/**
 * Stage模型的app插件
 *
 * @param module hvigorProject
 */
export declare const appTasks: (module: Project) => import("./src/plugin/app-plugin.js").AppPlugin;
/**
 * Fa模型的app插件
 *
 * @param module hvigorProject
 */
export declare const legacyAppTasks: (module: Project) => import("./src/plugin/app-plugin.js").AppPlugin;
/**
 * Stage模型的Har插件
 *
 * @param module hvigorModule
 */
export declare const harTasks: (module: Module) => import("./src/plugin/common/abstract-har-module-plugin.js").AbstractHarModulePlugin;
/**
 * Fa模型的Har插件
 *
 * @param module hvigorModule
 */
export declare const legacyHarTasks: (module: Module) => import("./src/plugin/common/abstract-har-module-plugin.js").AbstractHarModulePlugin;
/**
 * Stage模型的hsp插件，注意没有Fa模型的hsp插件
 *
 * @param module hvigorModule
 */
export declare const hspTasks: (module: Module) => import("./src/plugin/hsp-plugin.js").HspPlugin;
/**
 * 对外支持remote_hsp在线签名接口，非需求要求不要轻易修改
 */
export { getRemoteHspObjList } from './src/utils/remote-hsp-utils';
export { HvigorCompilePlugin, CompileHookInterface, HvigorCompilePluginContext, ModuleInfo, ShouldInvalidCacheOptions, AcornNode, NullValue } from '@ohos/hvigor-arkts-compose';
export { OhosAppContext, OhosHapContext, OhosHarContext, OhosHspContext, Product, Target, OhosPluginId, OhpmDependencyInfo, BuildOption, AppOhosConfig, HapOhosConfig, HspOhosConfig, HarOhosConfig, DefaultPluginId } from './src/external/api/ohos-plugin-api.js';
