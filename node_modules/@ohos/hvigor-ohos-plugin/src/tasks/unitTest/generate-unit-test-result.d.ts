import { TargetTaskService } from '../service/target-task-service.js';
import { OhosModuleTask } from '../task/ohos-module-task.js';
/**
 * 调用ohos/coverage接口，生成测试覆盖率报告
 *
 * @2023/12/29
 */
export declare class GenerateUnitTestResult extends OhosModuleTask {
    private logger;
    constructor(taskService: TargetTaskService);
    private getHmosPreviewerPath;
    private getOhosPreviewerPath;
    private getPreviewerPath;
    doTaskAction(): Promise<void>;
    initTaskDepends(): void;
}
