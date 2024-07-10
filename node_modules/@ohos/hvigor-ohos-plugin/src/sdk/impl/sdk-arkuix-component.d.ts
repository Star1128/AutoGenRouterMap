import { Component } from '@ohos/sdkmanager-common';
import { SdkComponent } from '../superior/sdk-component.js';
/**
 * arkuix 实例
 *
 * @since 2023-05-04
 */
export declare class SdkArkUIXComponent extends SdkComponent {
    readonly ARKUI_X_ROOT = "arkui-x";
    constructor(component: Component);
    getArkUIXRootPath(): string;
}
