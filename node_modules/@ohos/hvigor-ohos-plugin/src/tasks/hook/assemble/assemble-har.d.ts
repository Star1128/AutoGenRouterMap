import { ModuleTaskService } from '../../service/module-task-service.js';
import { TargetTaskService } from '../../service/target-task-service.js';
import { AbstractModuleHookTask } from '../abstract-module-hook-task.js';
/**
 * 组装Hap打包的任务流
 *
 * @since 2022/1/20
 */
export declare class AssembleHar extends AbstractModuleHookTask {
    constructor(moduleService: ModuleTaskService, isFaMode: boolean);
    initTaskDepends(taskTargetService: TargetTaskService): void;
}
