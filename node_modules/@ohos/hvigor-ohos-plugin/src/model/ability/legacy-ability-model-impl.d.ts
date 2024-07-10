import { AbilityTypeEnum } from '../../enum/ability-type-enum.js';
import { CodeType } from '../../enum/code-type-enum.js';
import { ConfigJson } from '../../options/configure/config-json-options.js';
import { LegacyAbilityModel } from './legacy-ability-model.js';
/**
 * Fa模型中的ability数据模型
 *
 * @since 2022/1/19
 */
export declare class LegacyAbilityModelImpl implements LegacyAbilityModel {
    private _log;
    private readonly _configObj;
    private readonly _configFile;
    private readonly _abilityName;
    private readonly _abilityObj;
    private readonly _jsObj;
    constructor(configJson: string, abilityName: string);
    private findJsByName;
    private hasJsObj;
    private findAbilityByName;
    getRelateSrcPath(): string;
    getName(): string;
    getSrcLanguage(): CodeType;
    getType(): AbilityTypeEnum;
    getConfigJsonJsObj(): ConfigJson.JsObj | undefined;
}
