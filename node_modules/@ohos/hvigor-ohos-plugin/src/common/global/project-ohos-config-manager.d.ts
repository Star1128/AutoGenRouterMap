import { AppOhosConfig, Overrides } from '../../options/build/app-ohos-config.js';
export declare class ProjectOhosConfigManager {
    private ohosConfig;
    loaderConfig(profile: AppOhosConfig): void;
    getOverrides(): Overrides | undefined;
    getConfig(): AppOhosConfig | undefined;
}
export declare const projectOhosConfigManager: ProjectOhosConfigManager;
