import { BuildOption, ModuleOhosConfig } from '../../options/build/hap-ohos-config.js';
export declare class ModuleOhosConfigManager {
    private configMap;
    loaderConfig(moduleName: string, config: ModuleOhosConfig): void;
    getBuildOption(moduleName: string): BuildOption | undefined;
    getConfig(moduleName: string): ModuleOhosConfig | undefined;
}
export declare const moduleOhosConfigManager: ModuleOhosConfigManager;
