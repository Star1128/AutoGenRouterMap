import { ModuleJson } from '../options/configure/module-json-options.js';
import ModuleOptObj = ModuleJson.ModuleOptObj;
import { ConfigJson } from '../options/configure/config-json-options.js';
import ConfigOptObj = ConfigJson.ConfigOptObj;
/**
 * 根据不同模型获取module.json5/config.json相关数据
 */
export interface JsonProfile {
    jsonFilePath: string;
    profile: ModuleOptObj | ConfigOptObj;
    deviceTypes: string[];
    deviceConfig: string;
    configurationProfile: string;
}
