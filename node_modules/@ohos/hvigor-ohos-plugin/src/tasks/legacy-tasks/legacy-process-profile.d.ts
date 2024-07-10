import { TargetTaskService } from '../service/target-task-service.js';
import { OhosHapTask } from '../task/ohos-hap-task.js';
import { TaskInputValue } from '@ohos/hvigor';
import { FileSet } from '@ohos/hvigor';
/**
 * 处理config.json
 *
 * @since 2022/1/10
 */
export declare class LegacyProcessProfile extends OhosHapTask {
    private _log;
    private readonly _arkEnable;
    private readonly _deviceTypes;
    private readonly _intermediatesMergeLegacyProfile;
    private readonly _processedModuleJson;
    private readonly _moduleBuildProfilePath;
    constructor(taskService: TargetTaskService);
    initTaskDepends(): void;
    doTaskAction(): void;
    private replaceTargetAbilityPages;
    private replaceAbilityPage;
    private validateTargetAbilityName;
    private printInvalidError;
    declareInputs(): Map<string, TaskInputValue>;
    declareInputFiles(): FileSet;
    declareOutputFiles(): FileSet;
}
