import { TargetTaskService } from './service/target-task-service.js';
import { OhosHapTask } from './task/ohos-hap-task.js';
/**
 * 命令行生成ohos测试覆盖率报告
 */
export declare class GenerateDeviceCoverage extends OhosHapTask {
    private readonly _log;
    constructor(taskService: TargetTaskService);
    protected doTaskAction(): Promise<void>;
    getOutputPackagePath(): string;
    initTaskDepends(): void;
    protected getDependenciesPaths(): string[];
}
