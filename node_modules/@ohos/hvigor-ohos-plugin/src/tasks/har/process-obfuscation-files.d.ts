import { TargetTaskService } from '../service/target-task-service.js';
import { OhosHarTask } from '../task/ohos-har-task.js';
/**
 * 调用etsLoader生成合并的obfuscation.txt
 */
export declare class ProcessObfuscationFiles extends OhosHarTask {
    private _log;
    constructor(taskService: TargetTaskService);
    taskShouldDo(): boolean;
    protected doTaskAction(): Promise<void>;
    initTaskDepends(): void;
}
