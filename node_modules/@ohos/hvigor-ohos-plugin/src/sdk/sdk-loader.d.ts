import { ProjectBuildProfile } from '../options/build/project-build-profile.js';
import { SdkInfo } from './sdk-info.js';
export declare class SdkLoader {
    isOhos: boolean;
    apiMeta: ProjectBuildProfile.ApiMeta;
    static loader?: SdkLoader;
    sdkInfo?: SdkInfo;
    private constructor();
    static getSdkInfo(apiMeta: ProjectBuildProfile.ApiMeta, isOhos?: boolean): SdkInfo;
    private static apiCompare;
}
