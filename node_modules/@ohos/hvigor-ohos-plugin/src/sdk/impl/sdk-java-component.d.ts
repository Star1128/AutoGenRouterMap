import { Component } from '@ohos/sdkmanager-common';
import { HosSdkComponent } from '../superior/hos-sdk-component.js';
/**
 * sdk java实例
 */
export declare class SdkJavaComponent extends HosSdkComponent {
    private static readonly LIB;
    private static readonly API;
    private static readonly BUILD_TOOLS;
    private static readonly OHOS_JAR;
    private static readonly ABILITY_SHELL_JAR;
    private static readonly ACE_IDE_JAR;
    constructor(component: Component);
    getRestoolPath(): string;
    getOhosJarPath(): string;
    getAbilityShellJarPath(): string;
    getAceJarPath(): string;
    getReleaseType(): string;
}
