import { AbstractModuleHookTask } from './hook/abstract-module-hook-task.js';
import { ModuleTaskService } from './service/module-task-service.js';
import { TargetTaskService } from './service/target-task-service.js';
/**
 * 不依赖DevEco Studio的ohos测试构建任务
 *
 * @since 2023/12/19
 */
export declare class DeviceTestHook extends AbstractModuleHookTask {
    initTaskDepends(taskTargetService: TargetTaskService): void;
    constructor(moduleTaskService: ModuleTaskService, isFaMode: boolean);
}
