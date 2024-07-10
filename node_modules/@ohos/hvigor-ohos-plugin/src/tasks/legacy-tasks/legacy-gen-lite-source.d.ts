import { TargetTaskService } from '../service/target-task-service.js';
import { OhosHapTask } from '../task/ohos-hap-task.js';
/**
 * 生成lite的资源文件
 */
export declare class LegacyGenLiteSource extends OhosHapTask {
    private _logger;
    protected syscapJsonPath: string | undefined;
    constructor(taskService: TargetTaskService);
    initTaskDepends(): void;
    protected doTaskAction(): Promise<void>;
    private genLiteSource;
    protected beforeTask(): Promise<void>;
}
