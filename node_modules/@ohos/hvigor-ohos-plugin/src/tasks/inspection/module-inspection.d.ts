import { ModuleModel } from '../../model/module/module-model.js';
import { TargetRuntimeOS } from '../../options/build/module-build-profile.js';
import { ProjectBuildProfile } from '../../options/build/project-build-profile.js';
import { InspectionI } from './inspection-i.js';
import ProductBuildOpt = ProjectBuildProfile.ProductBuildOpt;
export declare class ModuleInspection implements InspectionI {
    private _log;
    private readonly projectModel;
    private readonly moduleModel;
    constructor(moduleModel: ModuleModel);
    doInspection(): InspectionI;
    /**
     * 收集各个模块target的runtimeOS信息
     * 用于runtimeOS及API校验
     */
    collectTargetRuntimeOS(): void;
    targetApiVersionCheck(): void;
    targetBuildOptInspection(): void;
    runtimeOSInspection(target: TargetRuntimeOS, product: ProductBuildOpt): void;
    private checkModuleType;
    exitOnError(): void;
}
