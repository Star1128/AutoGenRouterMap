import { FileSet } from '@ohos/hvigor';
import { AbstractCompileResource } from './abstract/abstract-compile-resource.js';
import { ModuleTargetData } from './data/hap-task-target-data.js';
import { TargetTaskService } from './service/target-task-service.js';
/**
 * prview场景增量方式编译资源
 *
 * @since 2022/09/22
 */
export declare class PreviewCompileResource extends AbstractCompileResource {
    protected processProfileTask: string;
    private _log;
    declareExecutionCommand(): string;
    constructor(targetTaskService: TargetTaskService);
    initTaskDepends(): void;
    declareInputFiles(): FileSet;
    doTaskAction(): Promise<void>;
    invokeRestool(targetData: ModuleTargetData): Promise<void>;
}
