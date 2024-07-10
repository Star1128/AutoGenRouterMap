import { FileSet } from '@ohos/hvigor';
import { ProjectConfig } from '@ohos/hvigor-arkts-compose';
import { CodeType } from '../../enum/code-type-enum.js';
import { LegacyAbilityModel } from '../../model/ability/legacy-ability-model.js';
import { TargetTaskService } from '../service/target-task-service.js';
import { LegacyArkCompile } from './legacy-ark-compile.js';
/**
 * 处理ohosTest Target时调用loader编译老模型的js/ets源码
 *
 * @since 2023/1/28
 */
export declare class LegacyOhosTestArkCompile extends LegacyArkCompile {
    constructor(taskService: TargetTaskService, codeType: CodeType);
    declareInputFiles(): FileSet;
    protected initDefaultLegacyArkConfig(rOS: string, sInfo: string, abilityInfo: LegacyAbilityModel): ProjectConfig;
}
