import { Component, PathAndApiVersion } from '@ohos/sdkmanager-common';
import { ProjectBuildProfile } from '../../options/build/project-build-profile.js';
import { CommonSdkInfo } from './common-sdk-info.js';
import ApiMeta = ProjectBuildProfile.ApiMeta;
export declare class ArkUIXSdkInfo extends CommonSdkInfo {
    private readonly arkUIXSdkInfoHandler;
    private readonly arkUIXComponents;
    private readonly projectArkUIXSdkPath;
    private sdkArkUIXComponent?;
    protected localLibComponents: Map<PathAndApiVersion, Component>;
    constructor(requireComponents: string[], sdkVersion: ApiMeta, sdkDir: string);
    setup(): Promise<void>;
    contains(pathAndApi: PathAndApiVersion, all: Map<PathAndApiVersion, Component>): Component | undefined;
    protected initComponent(component: Component): void;
    getArkUIXRootPath(): string;
    getProjectArkUIXSdkPath(): string;
}
