import { FileSet } from '@ohos/hvigor';
import { TaskInputValue } from '@ohos/hvigor';
import { TargetTaskService } from '../service/target-task-service.js';
import { OhosHapTask } from '../task/ohos-hap-task.js';
/**
 * 调用ohpm进行shared har的打包工作
 *
 * @since 2023/1/18
 */
export declare class PackageSharedHar extends OhosHapTask {
    private readonly taskTmpDir;
    private readonly npmCommand;
    private readonly npmPath;
    private readonly outputDir;
    constructor(taskService: TargetTaskService);
    declareExecutionCommand(): string;
    declareExecutionEnv(): Map<string, string>;
    declareInputs(): Map<string, TaskInputValue>;
    declareInputFiles(): FileSet;
    declareOutputFiles(): FileSet;
    initTaskDepends(): void;
    protected doTaskAction(): Promise<void>;
    private executeNpmPack;
    private executeOhpmPack;
}
