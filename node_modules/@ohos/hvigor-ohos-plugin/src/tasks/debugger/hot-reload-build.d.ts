import { AbstractModuleHookTask } from '../hook/abstract-module-hook-task.js';
import { ModuleTaskService } from '../service/module-task-service.js';
import { TargetTaskService } from '../service/target-task-service.js';
/**
 * 调试方构建
 *
 * @since 2022/11/29
 */
export declare class HotReloadBuild extends AbstractModuleHookTask {
    constructor(moduleTaskService: ModuleTaskService);
    initTaskDepends(taskTargetService: TargetTaskService): void;
}
