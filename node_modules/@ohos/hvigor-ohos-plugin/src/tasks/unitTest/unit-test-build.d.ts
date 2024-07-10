import { AbstractModuleHookTask } from '../hook/abstract-module-hook-task.js';
import { ModuleTaskService } from '../service/module-task-service.js';
import { TargetTaskService } from '../service/target-task-service.js';
/**
 * 单元测试构建任务
 *
 * @since 2023/4/23
 */
export declare class UnitTestBuild extends AbstractModuleHookTask {
    constructor(moduleTaskService: ModuleTaskService, isFaMode: boolean);
    initTaskDepends(taskTargetService: TargetTaskService): void;
}
