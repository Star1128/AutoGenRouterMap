import { FileSet } from '@ohos/hvigor';
import { BaseSign } from '../base/base-sign.js';
import { TargetTaskService } from '../service/target-task-service.js';
/**
 * Sign hsp
 *
 * @since 2023/1/17
 */
export declare class SignHsp extends BaseSign {
    protected readonly inputFile: string | undefined;
    protected readonly outputFile: string | undefined;
    constructor(targetService: TargetTaskService);
    declareInputFiles(): FileSet;
    declareOutputFiles(): FileSet;
    protected doTaskAction(): Promise<void>;
    initTaskDepends(): void;
}
