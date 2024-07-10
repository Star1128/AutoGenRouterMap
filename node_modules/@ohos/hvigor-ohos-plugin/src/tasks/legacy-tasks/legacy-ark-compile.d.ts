import { TaskDetails } from '@ohos/hvigor';
import { ProjectConfig } from '@ohos/hvigor-arkts-compose';
import { CodeType } from '../../enum/code-type-enum.js';
import { LegacyAbilityModel } from '../../model/ability/legacy-ability-model.js';
import { TargetTaskService } from '../service/target-task-service.js';
import { LegacyCompileNode } from './legacy-compile-node.js';
export declare class LegacyArkCompile extends LegacyCompileNode {
    constructor(taskService: TargetTaskService, codeType: CodeType, taskDetails?: TaskDetails);
    protected doTaskAction(): Promise<void>;
    /**
     * 编译testRunner
     *
     * @param rOS 运行时OS
     * @param sInfo sdk信息
     * @param logger 日志
     */
    private arkCompileTestRunner;
    private initCommonLegacyArkConfig;
    private initTestRunnerLegacyArkConfig;
    protected initDefaultLegacyArkConfig(rOS: string, sInfo: string, abilityInfo: LegacyAbilityModel): ProjectConfig;
    private getLegacyArkCachePath;
}
