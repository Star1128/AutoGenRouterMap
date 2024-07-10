import { DefaultTask, TaskDetails } from '@ohos/hvigor';
import { ModuleTaskService } from '../service/module-task-service.js';
import { TargetTaskService } from '../service/target-task-service.js';
/**
 * 继承此类的都是以module为基础，提供的hook task，不区分不同的target
 *
 * @since 2022/8/11
 */
export declare abstract class AbstractModuleHookTask extends DefaultTask {
    protected readonly _moduleService: ModuleTaskService;
    protected readonly _isFaMode: boolean;
    protected constructor(moduleService: ModuleTaskService, isFaMode: boolean, taskName: TaskDetails);
    registryAction: () => Function;
    abstract initTaskDepends(taskTargetService: TargetTaskService): void;
}
