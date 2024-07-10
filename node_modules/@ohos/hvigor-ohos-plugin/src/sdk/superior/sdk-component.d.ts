import { Component } from '@ohos/sdkmanager-common';
import { SdkVersion } from '../../version/sdk-version.js';
/**
 * sdk公共实例
 *
 * @since 2021-12-16
 */
export declare class SdkComponent {
    private readonly _baseDir;
    private readonly _componentApiVersion;
    private readonly _componentVersion;
    private readonly _releaseType;
    constructor(component: Component);
    getBaseDir(): string;
    getComponentApiVersion(): number;
    getComponentVersion(): SdkVersion;
    getReleaseType(): string;
    /**
     * 不高于'3.2.2.5' 且 不是'3.2.1.4'版本的SDK, 要求配置UISyntax
     *
     * @returns {boolean}
     */
    requireUISyntax(): boolean;
    /**
     * 支持资源增量编译的版本
     * ohos必须大于或等于3.2.7.2
     * 半容器版本必须大于或等于3.1.1.2
     *
     * @returns {boolean}
     */
    supportCompileResourceIncrement(isHarmonyOS: boolean): boolean;
    /**
     * 支持Ohpm的SDK版本
     * ohos不能小于3.2.10.7
     * hos不能小于3.2.5.6
     */
    supportOhpmProject(isHarmonyOS: boolean): boolean;
}
