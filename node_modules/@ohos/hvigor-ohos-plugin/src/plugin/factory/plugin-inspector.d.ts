import { AbstractHapModulePlugin } from '../common/abstract-hap-module-plugin.js';
import { AbstractHarModulePlugin } from '../common/abstract-har-module-plugin.js';
export declare class PluginInspector {
    private static _log;
    /**
     * 校验feature模块的entryModules中的字段是否合法的entry
     * @param hapPlugin
     * @public
     */
    static checkFeatureEntryModules(hapPlugin: AbstractHapModulePlugin): void;
    /**
     * 检查原子化服务是否依赖hsp
     * @param hapPlugin
     * @public
     */
    static checkAtomicServiceHspModules(hapPlugin: AbstractHarModulePlugin): void;
}
