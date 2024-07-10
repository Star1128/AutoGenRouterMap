import { Project } from '@ohos/hvigor';
import { ProjectTaskService } from './service/project-task-service.js';
import { OhosAppTask } from './task/ohos-app-task.js';
/**
 * 执行app打包相关任务前，需要针对本地的hsp模块依赖进行校验
 * 如果本地hsp之间存在相同的har依赖，包括本地和远程，则需要进行报错提示
 * 该任务暂时不做增量，因为依赖已经提前收集好了，只需要遍历一次依赖即可
 *
 * @since 2024/05/20
 */
export declare class DuplicateDependencyCheck extends OhosAppTask {
    private readonly ohPackagePath;
    constructor(project: Project, taskService: ProjectTaskService);
    protected doTaskAction(): void;
    private collectProjectDependencies;
    initTaskDepends(): void;
}
