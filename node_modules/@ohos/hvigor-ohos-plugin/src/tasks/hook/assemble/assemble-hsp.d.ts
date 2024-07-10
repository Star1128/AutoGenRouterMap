import { ModuleTaskService } from '../../service/module-task-service.js';
import { TargetTaskService } from '../../service/target-task-service.js';
import { AbstractModuleHookTask } from '../abstract-module-hook-task.js';
/**
 * 组装Hsp打包的任务流
 *
 * @since 2023/1/17
 */
export declare class AssembleHsp extends AbstractModuleHookTask {
    constructor(moduleService: ModuleTaskService, isFaMode: boolean);
    initTaskDepends(taskTargetService: TargetTaskService): void;
}
