import { AbstractModuleHookTask } from '../hook/abstract-module-hook-task.js';
import { ModuleTaskService } from '../service/module-task-service.js';
import { TargetTaskService } from '../service/target-task-service.js';
/**
 * 不依赖DevEco Studio的单元测试构建任务
 *
 * @since 2023/12/19
 */
export declare class Test extends AbstractModuleHookTask {
    constructor(moduleTaskService: ModuleTaskService, isFaMode: boolean);
    initTaskDepends(taskTargetService: TargetTaskService): void;
}
