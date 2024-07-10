import { Project } from '@ohos/hvigor';
import { FileSet, TaskInputValue } from '@ohos/hvigor';
import { ProjectTaskService } from './service/project-task-service.js';
import { BasePackAppTask } from './base/base-pack-app-task.js';
/**
 * 调用打包工具生成pack.res
 *
 * @since 2023/1/13
 */
export declare class GeneratePackRes extends BasePackAppTask {
    private readonly packResCommand;
    declareExecutionCommand(): string;
    declareInputs(): Map<string, TaskInputValue>;
    declareInputFiles(): FileSet;
    declareOutputFiles(): FileSet;
    constructor(project: Project, taskService: ProjectTaskService);
    initTaskDepends(): void;
    protected doTaskAction(): Promise<void>;
    /**
     * 调用打包工具, 当工程目录下有EntryCard目录时, 生成pack.res用于应用市场上架
     */
    protected generatePackRes(): Promise<void>;
}
