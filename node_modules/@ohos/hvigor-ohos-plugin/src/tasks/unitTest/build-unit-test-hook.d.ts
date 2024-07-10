import { TargetTaskService } from '../service/target-task-service.js';
import { OhosHapTask } from '../task/ohos-hap-task.js';
/**
 * unit test编译资源
 *
 * @2023/4/24
 */
export declare class BuildUnitTestHook extends OhosHapTask {
    protected syscapJsonPath: string;
    protected isFaMode: boolean;
    constructor(targetService: TargetTaskService, isFaMode: boolean);
    protected doTaskAction(): void;
    initTaskDepends(): void;
    private getLegacyUnitTestCompileRes;
    private createTaskAndDepends;
}
