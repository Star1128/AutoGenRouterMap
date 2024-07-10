/// <reference types="node" />
import { DurationEvent, FileSet } from '@ohos/hvigor';
import { OhosLogger } from '../../utils/log/ohos-logger.js';
import { CompileNode } from '../compile-node.js';
import { ModuleTargetData } from '../data/hap-task-target-data.js';
import { TargetTaskService } from '../service/target-task-service.js';
/**
 * 调用ace-loader编译老模型的js的瘦设备代码
 *
 * @since 2022/5/17
 */
export declare class LegacyCompileLiteNode extends CompileNode {
    private _logger;
    constructor(taskService: TargetTaskService);
    declareOutputFiles(): FileSet;
    taskShouldDo(): boolean;
    initTaskDepends(): void;
    protected doTaskAction(): Promise<void>;
    protected moveReleaseMap(targetData: ModuleTargetData, log: OhosLogger, abilityPath?: string): void;
    protected doRealLoaderCompile(cmdEnv: NodeJS.ProcessEnv, callback: Function, callbackInput: unknown[], subDurationEvent: DurationEvent, targetWorkers?: number[]): Promise<void>;
}
