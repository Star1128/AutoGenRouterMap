import { FileSet, TaskInputValue } from '@ohos/hvigor';
import { BaseSign } from '../base/base-sign.js';
import { TargetTaskService } from '../service/target-task-service.js';
/**
 * Sign&Package har
 *
 * @since 2024/05/11
 */
export declare class PackageSignHar extends BaseSign {
    protected readonly compiledRoot: string;
    protected readonly taskTmpRoot: string;
    protected readonly outputFile: string;
    protected readonly packageRoot: string;
    constructor(targetService: TargetTaskService);
    protected beforeTask(): void;
    declareInputs(): Map<string, TaskInputValue>;
    taskShouldDo(): boolean;
    declareInputFiles(): FileSet;
    declareOutputFiles(): FileSet;
    protected doTaskAction(): Promise<void>;
    initTaskDepends(): void;
}
