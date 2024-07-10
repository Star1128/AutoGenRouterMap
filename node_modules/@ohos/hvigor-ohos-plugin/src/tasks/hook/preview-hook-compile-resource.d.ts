import { TargetTaskService } from '../service/target-task-service.js';
import { OhosHapTask } from '../task/ohos-hap-task.js';
/**
 * 预览时资源编译处理是否支持Restool增量方式编译的hook任务
 *
 * @since 2022/10/12
 */
export declare class PreviewHookCompileResource extends OhosHapTask {
    constructor(taskService: TargetTaskService);
    protected doTaskAction(): void;
    initTaskDepends(): void;
}
