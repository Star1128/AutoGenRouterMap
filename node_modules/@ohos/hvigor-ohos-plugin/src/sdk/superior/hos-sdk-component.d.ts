import { Component } from '@ohos/sdkmanager-common';
/**
 * hos sdk公共实例
 *
 * @since 2021-4-18
 */
export declare class HosSdkComponent {
    private readonly _baseDir;
    private readonly _component;
    constructor(component: Component, type: string);
    getBaseDir(): string;
    getComponent(): Component;
}
