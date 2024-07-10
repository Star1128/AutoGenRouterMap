import { Project } from '@ohos/hvigor';
import { TargetRuntimeOS } from '../../options/build/module-build-profile.js';
import { ProjectBuildProfile } from '../../options/build/project-build-profile.js';
import { TargetTaskService } from '../../tasks/service/target-task-service.js';
import { Model } from '../model.js';
import { ModuleModel } from '../module/module-model.js';
import { AppRes } from '../res/res-model.js';
/**
 * app级别的工程对象模型
 *
 * @since 2021/12/16
 */
export interface ProjectModel extends Model, TargetRegistry {
    /**
     * 刷新模型数据，从BuildProfileLoader中重新读取
     */
    refreshData: () => void;
    getProject(): Project;
    /**
     * 获取工程Project级别的build-profile.json的对象
     */
    getProfileOpt: () => ProjectBuildProfile.ProjectProfileOpt;
    /**
     * 根据moduleName获取对应module中的build-profile的配置
     *
     * @param moduleName
     */
    getModuleProfileOpt: (moduleName: string) => ProjectBuildProfile.ModuleBuildOpt | undefined;
    /**
     * 根据module的名称获取对应子模块的数据模型
     */
    getModuleModelByName: (moduleName: string) => ModuleModel | undefined;
    /**
     * 根据moduleName和targetName获取根项目下配置的applyToProducts
     *
     * @param moduleName
     * @param targetName
     */
    getTargetApplyProducts: (moduleName: string, targetName: string) => string[] | undefined;
    /**
     * 获取app-scope中定义的默认的bundleName
     */
    getDefaultBundleName: () => string;
    /**
     * 获取所有子模块对应的ModuleModel对象,需要获取跟ohos相关的信息的时候才需要调该方法
     * 注意时序问题，当前在初始化某个模块时,调用该方法会获取不了所有的subModuleModel对象
     * 如果需要在plugin中任意地方获取当前工程的所有子模块,需要调用的是project.getSubModules()
     */
    getSubModuleModels: () => Map<string, Model>;
    /**
     * 获取所有entry模块的模块名
     *
     * @returns {Set<string>}
     */
    getAllEntryModules(): Set<string>;
    /**
     * 获取工程配置的所有的product的name集合
     *
     * @return {string[]}
     */
    getProductNames(): string[];
    /**
     * 获取命令行参数-p module=配置的module和targets信息
     */
    getModuleSpecificTargets(): Map<string, string[]>;
    /**
     * 获取parameterFile文件的绝对路径
     */
    getParameterFileAbsolutePath(): string | undefined;
    getParameterFileObj(): object | undefined;
    getTargetRuntimeOSs(): TargetRuntimeOS[];
    getCacheRemoteHspPath(productName: string): string;
    getCacheIntegratedHspPath(productName: string): string;
    getBundleType(): string;
    isFaMode(): boolean;
}
export interface StageProjectAppRes {
    /**
     * 获取app级别的资源
     */
    getAppRes: () => AppRes;
}
export interface TargetRegistry {
    registryTarget: (service: TargetTaskService) => void;
    getTarget: (moduleName: string, targetName?: string) => TargetTaskService | undefined;
}
