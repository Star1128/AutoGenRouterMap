import { FileSet } from '@ohos/hvigor';
import { BaseSign } from '../base/base-sign.js';
import { TargetTaskService } from '../service/target-task-service.js';
import { ModuleTargetData } from '../data/hap-task-target-data.js';
/**
 * 签名bin包
 */
export declare class LegacySignLiteBin extends BaseSign {
    protected readonly inputFile: string | undefined;
    protected readonly outputFile: string | undefined;
    protected readonly targetServiceData: ModuleTargetData | undefined;
    constructor(taskService: TargetTaskService);
    declareInputFiles(): FileSet;
    declareOutputFiles(): FileSet;
    taskShouldDo(): boolean;
    initTaskDepends(): void;
    protected doTaskAction(): Promise<void>;
}
