import { AbstractCompileResource } from '../abstract/abstract-compile-resource.js';
import { ModuleTargetData } from '../data/hap-task-target-data.js';
import { TargetTaskService } from '../service/target-task-service.js';
/**
 * 老模型的Preview适配Restool资源增量编译任务
 *
 * @since 2022/1/20
 */
export declare class LegacyPreviewCompileResource extends AbstractCompileResource {
    protected processProfileTask: string;
    private _log;
    declareExecutionCommand(): string;
    constructor(taskService: TargetTaskService, entryModuleName?: string);
    initTaskDepends(): void;
    protected initHarModuleDepends(): void;
    doTaskAction(): Promise<void>;
    invokeRestool(targetData: ModuleTargetData): Promise<void>;
}
