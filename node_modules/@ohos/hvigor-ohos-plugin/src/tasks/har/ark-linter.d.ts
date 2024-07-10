import { FileSet, TaskInputValue } from '@ohos/hvigor';
import { ProjectConfig } from '@ohos/hvigor-arkts-compose';
import { OhosLogger } from '../../utils/log/ohos-logger.js';
import { AbstractCompileNode } from '../abstract/abstract-compile-node.js';
import { TargetTaskService } from '../service/target-task-service.js';
/**
 * 开源library arkTS代码检查
 */
export declare class ArkLinter extends AbstractCompileNode {
    protected _log: OhosLogger;
    constructor(taskService: TargetTaskService);
    taskShouldDo(): boolean;
    protected doTaskAction(): Promise<void>;
    /**
     * 检查是否存在oh-package.json5中的main字段对应的入口文件, eg. index.ets
     */
    findAvailableEntry(): Promise<string>;
    customizeProjectConfig(): Promise<ProjectConfig>;
    initTaskDepends(): void;
    /**
     * 新增arkLinter对buildMode改变的增量判断
     */
    declareInputs(): Map<string, TaskInputValue>;
    declareInputFiles(): FileSet;
    /**
     * 继承的AbstractCompileNode存在declareOutputFiles,会触发增量判断导致该任务增量失效
     */
    declareOutputFiles(): FileSet;
}
