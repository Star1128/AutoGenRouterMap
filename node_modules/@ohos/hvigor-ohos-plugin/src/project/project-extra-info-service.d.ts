import { RuntimeTypeEnum } from '../enum/runtime-type-enum.js';
import { ProjectModel } from '../model/project/project-model.js';
/**
 * 提供一个单例对象，来初始化工程的所有模块的额外的状态信息，并在执行任务时获取
 *
 * @since 2022/1/18
 */
export declare class ProjectExtraInfoService {
    static getProjectRuntimeOS(project: ProjectModel): RuntimeTypeEnum;
}
