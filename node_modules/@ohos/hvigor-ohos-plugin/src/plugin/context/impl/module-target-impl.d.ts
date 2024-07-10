import { Product, Target } from '../plugin-context.js';
import { ModulePathInfoIml } from '../../../common/iml/module-path-info-iml.js';
import { ModuleBuildProfile } from '../../../options/build/module-build-profile.js';
import ModuleTargetBuildOpt = ModuleBuildProfile.ModuleTargetBuildOpt;
import { ModuleModel } from '../../../model/module/module-model.js';
import { ProjectModel } from '../../../model/project/project-model.js';
import { BuildOption } from '../../../options/build/hap-ohos-config.js';
/**
 * Module级别的上下文信息
 */
export declare class ModuleTargetImpl implements Target {
    private readonly targetInfo;
    private readonly modulePathInfo;
    private readonly projectPath;
    private readonly projectModel;
    private readonly moduleModel;
    private currentProduct;
    private buildTargetOutputPath;
    constructor(targetInfo: ModuleTargetBuildOpt, modulePathInfo: ModulePathInfoIml, projectModel: ProjectModel, moduleModel: ModuleModel);
    getBuildTargetOutputPath(): string;
    getTargetName(): string;
    getCurrentProduct(): Product;
    getBuildOption(): BuildOption;
    initCurrentProduct(): void;
    initBuildPath(): void;
}
