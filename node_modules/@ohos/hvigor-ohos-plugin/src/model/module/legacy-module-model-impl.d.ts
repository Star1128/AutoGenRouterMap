import { Module } from '@ohos/hvigor';
import { ModuleType } from '../../enum/module-type-enum.js';
import { ConfigJson } from '../../options/configure/config-json-options.js';
import { LegacyAbilityModel } from '../ability/legacy-ability-model.js';
import { ProjectModel } from '../project/project-model.js';
import { LegacyTargetSourceSetModel } from '../source-set/source-set-model.js';
import { CoreModuleModelImpl } from './core-module-model-impl.js';
import ConfigOptObj = ConfigJson.ConfigOptObj;
export declare class LegacyModuleModelImpl extends CoreModuleModelImpl {
    private _legacyAbilitiesMap;
    constructor(module: Module, parentProject: ProjectModel);
    private static validateSameNameAbility;
    initDefaultTargetSourceSet(): void;
    /**
     * 获取需要进行编译的ability信息
     */
    getLegacyAbilities(targetName?: string): LegacyAbilityModel[];
    getModuleType(targetName?: string): ModuleType;
    getDeviceTypes(): string[];
    getSourceSetByTargetName(targetName?: string): LegacyTargetSourceSetModel;
    getJsonObjByTargetName(targetName: string): ConfigOptObj;
    getJsonPathByTargetName(targetName: string): string;
    isAtomicService(): boolean;
    isInstallFree(): boolean;
    private initAbilityInfo;
    /**
     * 校验config.json中的forms中name字段为唯一
     *
     * @param legacyAbilitiesObjs
     * @private
     */
    private static validateFormUnique;
    getPermission(): object;
}
