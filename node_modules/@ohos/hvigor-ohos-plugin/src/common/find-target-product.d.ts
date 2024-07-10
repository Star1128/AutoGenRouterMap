import { ProjectModel } from '../model/project/project-model.js';
import { ProjectBuildProfile } from '../options/build/project-build-profile.js';
/**
 * 根据命令行中的配置找到根项目下的build-profile.json5中的Product
 *
 * @param projectModuleModel
 */
export declare function findTargetProduct(projectModuleModel: ProjectModel): ProjectBuildProfile.ProductBuildOpt;
