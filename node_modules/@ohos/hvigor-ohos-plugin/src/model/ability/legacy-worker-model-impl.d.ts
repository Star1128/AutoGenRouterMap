import { AbilityTypeEnum } from '../../enum/ability-type-enum';
import { CodeType } from '../../enum/code-type-enum';
import { ConfigJson } from '../../options/configure/config-json-options';
import { LegacyAbilityModel } from './legacy-ability-model';
export declare class LegacyWorkerModelImpl implements LegacyAbilityModel {
    private readonly workerFilePath;
    constructor(workerConfig: string[]);
    getConfigJsonJsObj(): ConfigJson.JsObj | undefined;
    getName(): string;
    getRelateSrcPath(): string;
    getSrcLanguage(): CodeType;
    getType(): AbilityTypeEnum;
}
