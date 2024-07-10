import { Component } from '@ohos/sdkmanager-common';
import { ProjectBuildProfile } from '../options/build/project-build-profile.js';
import ApiMeta = ProjectBuildProfile.ApiMeta;
export declare class HmosSdkLoader {
    private static container?;
    private hmsSdkMap;
    private sdkMap;
    private hmosSdkInfoHandler?;
    private ohosSdkInfoHandler?;
    private property;
    private constructor();
    static getInstance(): HmosSdkLoader;
    setHosMetaCompileSdkVersion(): void;
    /**
     * 获取HarmonyOS sdk中的openharmony
     *
     * @param sdkVersion
     * @param components
     */
    getHmosSdkComponents(sdkVersion: ApiMeta, components: string[]): Promise<Map<string, Component>>;
    private checkComponentExistence;
    /**
     * 获取HarmonyOS sdk中的hmscore
     *
     * @param sdkVersion
     * @param components
     */
    getHmsSdkComponents(sdkVersion: ApiMeta, components: string[]): Promise<Map<string, Component>>;
    initHandler(): void;
    private validateCache;
}
