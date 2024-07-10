import { DefaultTask, Project } from '@ohos/hvigor';
import { ProjectTaskService } from '../../service/project-task-service.js';
/**
 * 组装打包app的任务流
 *
 * @since 2022/1/20
 */
export declare class AssembleApp extends DefaultTask {
    private readonly _taskService;
    constructor(project: Project, taskService: ProjectTaskService);
    private initTaskDepends;
    registryAction: () => () => void;
}
