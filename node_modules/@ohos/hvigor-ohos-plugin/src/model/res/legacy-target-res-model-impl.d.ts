import { ConfigJson } from '../../options/configure/config-json-options.js';
import { CoreResModelImpl } from './core-res-model-impl.js';
import ConfigOptObj = ConfigJson.ConfigOptObj;
import { LegacyModuleTargetRes } from './res-model.js';
/**
 * Fa Module 的不同target对应的资源集合
 *
 * @since 2022/2/23
 */
export declare class LegacyModuleTargetResImpl extends CoreResModelImpl implements LegacyModuleTargetRes {
    protected _configJsonOpt: ConfigOptObj | undefined;
    private _log;
    constructor(sourceSetRoot: string);
    getConfigJsonOpt(): ConfigOptObj;
    hasLiteDevice(): boolean | undefined;
    supportLiteDeviceModule(): boolean;
    getShellApplicationPackage(): string;
}
