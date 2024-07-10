import { TargetTaskService } from '../../service/target-task-service.js';
import { OhosHarTask } from '../../task/ohos-har-task.js';
/**
 * har模块需要处理指定resource目录
 * 当前该任务执行处理很快,先不需要做增量
 */
export declare class LegacyProcessOHPackageJson extends OhosHarTask {
    private readonly generateOhPackageJsonFilePath;
    constructor(taskService: TargetTaskService);
    protected doTaskAction(): void;
    initTaskDepends(): void;
}
