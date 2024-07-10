import { AppOhosConfig } from '../../options/build/app-ohos-config.js';
import { HapOhosConfig, HarOhosConfig } from '../../options/build/hap-ohos-config.js';
/**
 * 校验在hvigorfile.ts里配置的config.ohos字段的内容
 */
export declare function validateOhosProjectConfig(config: AppOhosConfig, filePath: string): void;
export declare function validateOhosModuleConfig(config: HapOhosConfig, filePath: string): void;
export declare function validateOhosHarModuleConfig(config: HarOhosConfig, filePath: string): void;
