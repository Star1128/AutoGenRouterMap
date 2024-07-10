import { HosLocalComponentLoader } from '@ohos/hos-sdkmanager-common/build/src/hos/loader/hos-local-component-loader.js';
import { Component, OhLocalComponentLoader, PathAndApiVersion, SdkProxyInfo } from '@ohos/sdkmanager-common';
import { ProjectBuildProfile } from '../options/build/project-build-profile.js';
import ApiMeta = ProjectBuildProfile.ApiMeta;
/**
 * 根据OpenHarmony sdk目录结构规则预测是否存在相关组件
 * /${OhosSdkRoot}/${API}/${component}
 * /sdk/openharmony/10/toolchains
 *
 * @param sdkDir
 * @param version
 * @param components
 */
export declare const ohosPredict: (sdkDir: string, version: string, components: string[]) => Map<PathAndApiVersion, Component>;
/**
 * 根据HarmonyOS的hmscore sdk目录结构规则预测是否存在相关组件
 * /${HarmonyOSSdkRoot}/hmscore/${API}/${component}
 * /sdk/openharmony/10/toolchains
 *
 * @param sdkDir
 * @param sdkVersion
 * @param components
 */
export declare const hmsPredict: (sdkDir: string, sdkVersion: ApiMeta, components: string[]) => Map<string, Component>;
/**
 * 复用sdk-manager的oh-uni-package.json的解析能力
 */
export declare class OhosParser extends OhLocalComponentLoader {
    constructor(sdkRoot: string);
    parse(packages: string[]): Component[];
}
/**
 * 复用hos-sdk-manager的uni-package.json的解析能力
 */
export declare class HmsParser extends HosLocalComponentLoader {
    constructor(sdkRoot: string);
    parse(packages: string[]): Component[];
}
export declare const parseApiVersion: (version: string | number) => ProjectBuildProfile.ApiMeta;
export declare const proxyFun: () => SdkProxyInfo;
export declare const contains: (pathAndApi: string, all: Map<string, Component>) => Component | undefined;
export declare const handleSdkException: (ex: any) => void;
