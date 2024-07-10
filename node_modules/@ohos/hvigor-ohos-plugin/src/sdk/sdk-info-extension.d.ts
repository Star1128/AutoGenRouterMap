import { ProjectBuildProfile } from '../options/build/project-build-profile.js';
import { ArkUIXSdkInfo } from './info/arkuix-sdk-info.js';
import ApiMeta = ProjectBuildProfile.ApiMeta;
/**
 * 扩展SDK
 *
 * @since 2023/05/18
 */
export declare class SdkInfoExtension {
    private readonly sdkVersion;
    private sdkInfo;
    private property;
    constructor(sdkVersion: ApiMeta);
    getArkUIXInfo(): ArkUIXSdkInfo;
    private getArkUIXSdkDir;
}
