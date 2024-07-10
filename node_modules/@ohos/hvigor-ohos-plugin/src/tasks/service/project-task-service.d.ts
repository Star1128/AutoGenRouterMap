import { Project } from '@ohos/hvigor';
import { ProjectPathInfoIml } from '../../common/iml/project-path-info-iml.js';
import { ProjectModel } from '../../model/project/project-model.js';
import { BuildOpt } from '../../options/build/build-opt.js';
import { ProjectBuildProfile } from '../../options/build/project-build-profile.js';
import { SdkInfo } from '../../sdk/sdk-info.js';
import { ModuleTargetData } from '../data/hap-task-target-data.js';
import { TaskService } from './task-service.js';
import ProductBuildOpt = ProjectBuildProfile.ProductBuildOpt;
import { DependencyManager } from '../../project/dependency/dependency-manager';
/**
 * 基于持久化project的模型层提供的数据，经过处理后,提供给打包app任务流需要使用的服务和数据
 *
 * @since 2022/1/20
 */
export declare class ProjectTaskService extends TaskService {
    private _log;
    private _targetProduct;
    private readonly _pathInfo;
    private readonly _sdkInfo;
    private readonly _buildOption;
    private readonly _productDataMap;
    constructor(project: Project, projectModel: ProjectModel, dependencyManager: DependencyManager, isFaMode: boolean);
    setup(): Promise<void>;
    getSdkInfo(): SdkInfo;
    refreshData(): void;
    /**
     * 初始化app模块打包流的product数据集合
     */
    initProductData(): void;
    getProductDataMap(): Map<string, ModuleTargetData[]>;
    getPathInfo(): ProjectPathInfoIml;
    getTargetProduct(): ProductBuildOpt;
    getBuildOption(): BuildOpt;
    getAppOutputFileName(isSigned?: boolean): string;
    /**
     * 检查Product是否配置了ohosTarget
     * ohosTarget不需要打包进App中
     *
     * @param {ModuleTargetData} moduleTargetData moduleTarget对象
     */
    checkIsOhosTestTarget(moduleTargetData: ModuleTargetData): void;
    /**
     * 检查是否存在未定义的target
     *
     * @param targetNameSet 模块已定义的target集合
     * @param appModuleConfigTargets 工程级build-profile.json5中的targets标签
     */
    private checkTargetIsUnknown;
}
