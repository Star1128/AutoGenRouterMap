import { ModuleModel } from '../../model/module/module-model.js';
import { ProjectModel } from '../../model/project/project-model.js';
import { ModuleTaskService } from './module-task-service.js';
/**
 * 用于创建每个module的ModuleTaskService
 *
 * @since 2022/8/11
 */
export declare class ModuleTaskServiceFactory {
    static initModuleTaskService(projectModel: ProjectModel, moduleModel: ModuleModel, isFaMode: boolean): ModuleTaskService;
}
