import { Component, PathAndApiVersion } from '@ohos/sdkmanager-common';
import { ProjectBuildProfile } from '../options/build/project-build-profile.js';
import ApiMeta = ProjectBuildProfile.ApiMeta;
export declare class OhosSdkLoader {
    private static container?;
    private sdkMap;
    private sdkInfoHandler?;
    private property;
    private constructor();
    static getInstance(): OhosSdkLoader;
    getOhosSdkComponents(sdkVersion: ApiMeta, components: string[]): Promise<Map<PathAndApiVersion, Component>>;
    private pickRequired;
    initHandler(): void;
    private validateCache;
}
