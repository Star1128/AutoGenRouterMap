import { AbilityTypeEnum } from '../../enum/ability-type-enum.js';
import { CodeType } from '../../enum/code-type-enum.js';
import { ConfigJson } from '../../options/configure/config-json-options.js';
import { LegacyAbilityModel } from './legacy-ability-model.js';
/**
 * Fa模型中的form数据模型
 *
 * @since 2022/3/08
 */
export declare class LegacyFormModelImpl implements LegacyAbilityModel {
    private readonly _configObj;
    private readonly _jsName;
    private readonly _jsObj;
    constructor(configJson: string, jsObj: ConfigJson.JsObj);
    getRelateSrcPath(): string;
    getName(): string;
    getSrcLanguage(): CodeType;
    getType(): AbilityTypeEnum;
    getConfigJsonJsObj(): ConfigJson.JsObj | undefined;
}
