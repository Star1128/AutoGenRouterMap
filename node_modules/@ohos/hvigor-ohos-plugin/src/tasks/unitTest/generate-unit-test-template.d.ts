import { FileSet, TaskInputValue } from '@ohos/hvigor';
import { TargetTaskService } from '../service/target-task-service.js';
import { OhosModuleTask } from '../task/ohos-module-task.js';
/**
 * 不依赖DevEco Studio的单元测试构建任务的前置任务
 *
 * @since 2023/12/19
 */
export declare class GenerateUnitTestTemplate extends OhosModuleTask {
    constructor(taskService: TargetTaskService);
    private getParams;
    declareOutputFiles(): FileSet;
    declareInputs(): Map<string, TaskInputValue>;
    doTaskAction(): Promise<void>;
    initTaskDepends(): void;
}
