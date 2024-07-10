import { AbstractModuleHookTask } from './hook/abstract-module-hook-task.js';
import { ModuleTaskService } from './service/module-task-service.js';
import { TargetTaskService } from './service/target-task-service.js';
export declare class GeneratedBuildProfileTask extends AbstractModuleHookTask {
    private readonly isHar;
    constructor(moduleService: ModuleTaskService, isHar: boolean);
    initTaskDepends(taskTargetService: TargetTaskService): void;
}
