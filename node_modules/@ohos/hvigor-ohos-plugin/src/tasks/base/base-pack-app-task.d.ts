import { Project, TaskDetails } from '@ohos/hvigor';
import { ProjectPathInfoIml } from '../../common/iml/project-path-info-iml.js';
import { OhosLogger } from '../../utils/log/ohos-logger.js';
import { ProjectTaskService } from '../service/project-task-service.js';
import { OhosAppTask } from '../task/ohos-app-task.js';
/**
 * APP打包任务基类，（公共方法、公共属性）
 *
 * @since 2023/1/13
 */
export declare abstract class BasePackAppTask extends OhosAppTask {
    readonly _log: OhosLogger;
    readonly packageTool: string;
    readonly packInfoPath: string;
    readonly packResPath: string;
    readonly entryCardDir: string;
    readonly needPackRes: boolean;
    readonly pathInfo: ProjectPathInfoIml;
    protected constructor(project: Project, taskService: ProjectTaskService, taskDetails: TaskDetails);
    declareExecutionTool(): string;
    protected abstract initTaskDepends(): void;
    protected abstract doTaskAction(): void;
}
