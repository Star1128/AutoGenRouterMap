import { AbstractModuleHookTask } from '../hook/abstract-module-hook-task.js';
import { ModuleTaskService } from '../service/module-task-service.js';
import { TargetTaskService } from '../service/target-task-service.js';
/**
 * 提供调用hot reload的前置task
 */
export declare class BuildHotReloadResource extends AbstractModuleHookTask {
    private _log;
    constructor(moduleTaskService: ModuleTaskService);
    registryAction: () => Function;
    initTaskDepends(taskTargetService: TargetTaskService): void;
}
