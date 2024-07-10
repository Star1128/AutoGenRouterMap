import { FileSet } from '@ohos/hvigor';
import { AbstractCompileResource } from '../abstract/abstract-compile-resource.js';
import { ModuleTargetData } from '../data/hap-task-target-data.js';
import { TargetTaskService } from '../service/target-task-service.js';
/**
 * 老模型的资源编译任务
 *
 * @since 2022/1/20
 */
export declare class LegacyCompileResource extends AbstractCompileResource {
    protected processProfileTask: string;
    private _log;
    constructor(taskService: TargetTaskService, entryModuleName?: string);
    declareExecutionCommand(): string;
    declareInputFiles(): FileSet;
    initTaskDepends(): void;
    protected initHarModuleDepends(): void;
    doTaskAction(): Promise<void>;
    invokeRestool(targetData: ModuleTargetData): Promise<void>;
}
