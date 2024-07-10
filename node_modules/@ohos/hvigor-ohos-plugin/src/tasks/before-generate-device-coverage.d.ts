import { TargetTaskService } from './service/target-task-service.js';
import { OhosHapTask } from './task/ohos-hap-task.js';
/**
 * 命令行生成覆盖率测试报告的前置任务，用于依赖挂载
 */
export declare class BeforeGenerateDeviceCoverage extends OhosHapTask {
    constructor(taskService: TargetTaskService);
    protected doTaskAction(): void;
    initTaskDepends(): void;
}
