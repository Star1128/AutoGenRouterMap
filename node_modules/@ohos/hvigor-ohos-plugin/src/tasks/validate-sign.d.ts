import { TargetTaskService } from './service/target-task-service.js';
import { OhosHapTask } from './task/ohos-hap-task';
/**
 * 校验签名配置
 *
 * @since 2022/5/9
 */
export declare class ValidateSigning extends OhosHapTask {
    private static executed;
    constructor(taskService: TargetTaskService);
    initTaskDepends(): void;
    protected doTaskAction(): void;
}
