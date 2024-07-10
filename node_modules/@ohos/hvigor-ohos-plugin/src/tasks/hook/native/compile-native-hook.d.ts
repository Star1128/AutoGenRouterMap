import { ModuleTaskService } from '../../service/module-task-service.js';
import { TargetTaskService } from '../../service/target-task-service.js';
import { AbstractModuleHookTask } from '../abstract-module-hook-task.js';
/**
 * 暴露给其他模块使用的hook任务,任务名不可更改
 *
 * @since 2022/5/13
 */
export declare class CompileNativeHook extends AbstractModuleHookTask {
    constructor(moduleService: ModuleTaskService);
    initTaskDepends(taskTargetService: TargetTaskService): void;
}
