import { ProjectModel } from '../model/project/project-model.js';
import { ModuleBuildProfile } from '../options/build/module-build-profile.js';
import { ConfigJson } from '../options/configure/config-json-options.js';
import { OhosLogger } from '../utils/log/ohos-logger.js';
import DistroFilterBuildOpt = ModuleBuildProfile.DistroFilterBuildOpt;
import ApiVersionOpt = ModuleBuildProfile.ApiVersionOpt;
import ScreenShapeOpt = ModuleBuildProfile.ScreenShapeOpt;
import ScreenWindowOpt = ModuleBuildProfile.ScreenWindowOpt;
import ConfigOptObj = ConfigJson.ConfigOptObj;
import ModuleTargetBuildOpt = ModuleBuildProfile.ModuleTargetBuildOpt;
import { ModuleJson } from '../options/configure/module-json-options.js';
import MetadataObj = ModuleJson.MetadataObj;
import { CoreModuleModelImpl } from '../model/module/core-module-model-impl.js';
/**
 * distroFilter相关配置及处理操作抽象类
 */
export declare abstract class DistroFilterHandler {
    protected logger: OhosLogger;
    protected nextDimensionHandler?: DistroFilterHandler;
    protected projectModel: ProjectModel;
    constructor(projectModel: ProjectModel, distroFilterHandler?: DistroFilterHandler);
    /**
     * 处理当前校验请求
     * @param sourceDistroFilterConfig
     * @param targetDistroFilterConfig
     */
    abstract validateDistroFilterRequest(sourceDistroFilterConfig: DistroFilterConfig, targetDistroFilterConfig: DistroFilterConfig): void;
    /**
     * 获取当前维度distribution配置对象value
     * @param distroFilterConfig
     */
    abstract getDimensionValue(distroFilterConfig: DistroFilterConfig): number[] | string[] | undefined;
    /**
     * 设置下一个校验维度
     * @param nextDimensionHandler
     */
    setNextDimensionHandler(nextDimensionHandler: DistroFilterHandler): void;
    /**
     * 执行校验
     * @param distroFilterConfigList distroFilter配置对象集合
     */
    executeValidate(distroFilterConfigList: DistroFilterConfig[]): void;
    /**
     * 处理指定维度校验请求
     * @param sourceDistroFilterConfig
     * @param targetDistroFilterConfig
     * @param dimensionName ['apiVersion','screenShape','screenWindow'...]
     * @protected
     */
    protected doRequest(sourceDistroFilterConfig: DistroFilterConfig, targetDistroFilterConfig: DistroFilterConfig, dimensionName: string): void;
    /**
     * 获取指定校验维度distroFilter对象
     * @param distroFilterObj distroFilter对象
     * @param dimensionName 指定校验维度
     */
    getDistroFilterObjByDimension(distroFilterObj: DistroFilterBuildOpt | undefined, dimensionName: string): ApiVersionOpt | ScreenShapeOpt | ScreenWindowOpt | undefined;
    /**
     * 获取FA模型中distroFilterObj
     * @param projectModel
     * @param entryName
     * @private
     */
    static getFADistroFilterConfig(projectModel: ProjectModel, entryName: string): DistroFilterConfig | undefined;
    /**
     * 获取指定模块apply至当前product下的target集合
     * @param projectModel
     * @param moduleName
     * @private
     */
    static getCurModuleExecutableTargets(projectModel: ProjectModel, moduleName: string): ModuleTargetOpt[];
    /**
     * 获取指定模块当前可执行target的name集合 用于报错日志提示信息
     * @param projectModel
     * @param entryName
     */
    private static getCurModuleExecutableTargetNameList;
    /**
     * 获取工程中当前product下可执行target的distroFilter集合
     * @param projectModel
     */
    static getCurExecutableTargetsDistroFilterConfigList(projectModel: ProjectModel): DistroFilterConfig[];
    /**
     * 获取通用维度distroFilter配置对象的value
     * 通用维度:policy可以配置include/exclude && value存在已定义类型的取值范围
     * 例:apiVersion,screenShape,screenDensity,countryCode;screenWindow仅支持include
     * @param distroFilterConfig distroFilter配置
     * @param valueScope value取值范围
     * @param dimensionName 指定校验维度
     * @param errorLog 错误退出日志
     * @protected
     */
    protected getCommonDimensionValue(distroFilterConfig: DistroFilterConfig, valueScope: (string | number)[], dimensionName: string, errorLog: () => void): number[] | string[] | undefined;
    /**
     * 获取distroFilter校验报错时跳转文件链接
     * @param projectModel
     * @param moduleModel
     */
    static getDetailFilePath(projectModel: ProjectModel, moduleModel: CoreModuleModelImpl | undefined): string;
    /**
     * 获取target定制设备类型
     * @param projectModel
     * @param entryName
     * @param moduleTargetOpt
     */
    static getTargetDeviceType(projectModel: ProjectModel, entryName: string, moduleTargetOpt: ModuleTargetOpt): string[];
    /**
     * 获取target定制distroFilterConfig
     * @param projectModel
     * @param entryName
     * @param executableTarget
     */
    static getTargetDistroFilterConfig(projectModel: ProjectModel, entryName: string, executableTarget: ModuleTargetOpt): DistroFilterConfig;
    /**
     * 通过config.json获取config配置Obj
     * @param projectModel
     * @param entryName
     */
    static getConfigOptObj(projectModel: ProjectModel, entryName: string): ConfigOptObj;
    /**
     * 获取当前工程所有entry模块的设备类型集合
     * @param projectModel projectModel
     * @private
     */
    private static getDeviceTypeList;
    /**
     * 检查指定校验维度distroFilter配置是否为空,若为空返回true
     * @param distroFilterConfig
     * @param dimensionName 指定校验维度
     */
    checkDimensionConfigEmpty(distroFilterConfig: DistroFilterConfig, dimensionName: string): boolean;
    /**
     * 校验工程entry模块distroFilter标签是否存在且正确配置
     * @private
     */
    private checkDistroFilterLabel;
    /**
     * 检查当前工程任一可执行target是否存在定制distroFilter标签
     * @param projectModel
     */
    private static checkExistTargetDistroFilter;
    /**
     * 检查是否启用对target定制场景的distroFilter校验
     * 当前工程中若任一entry模块存在多个apply至同一product下的target,则需要对target启用distroFilter校验
     * @param projectModel
     */
    static validateMultiTarget(projectModel: ProjectModel): boolean;
    /**
     * 查找与指定entry模块存在设备类型交集的entry模块集合
     * @param projectModel
     * @param sourceEntry
     */
    static findIntersectedEntryList(projectModel: ProjectModel, sourceEntry: string): string[];
    /**
     * 检查指定模块下多个可执行target的设备类型是否存在交集以确定是否对多target进行distroFilter校验
     * @param projectModel
     * @param moduleName
     * @param entryExecutableTargetList
     * @private
     */
    static checkSingleEntryTargetDeviceType(projectModel: ProjectModel, moduleName: string, entryExecutableTargetList: ModuleTargetOpt[]): boolean;
    /**
     * 检查是否启用对多entry场景的distroFilter校验
     * @param projectModel
     */
    static validateMultiEntry(projectModel: ProjectModel): boolean;
    /**
     * 查找stage模型module.json5的metadata数组定义资源对象中第一个包含distroFilter配置的资源对象
     * @param projectDir
     * @param moduleModel
     * @param metadataList
     * @private
     */
    static findFirstDistroFilterConfigMetadata(projectDir: string, moduleModel: CoreModuleModelImpl, metadataList: MetadataObj[] | undefined): MetadataObj | undefined;
    /**
     * 检查module.json5中metadata数组定义资源对象是否包含distroFilter配置
     * @param projectDir
     * @param moduleModel
     * @param metadataList
     * @private
     */
    static checkMetadataExistDistroFilterConfig(projectDir: string, moduleModel: CoreModuleModelImpl, metadataList: MetadataObj[] | undefined): boolean;
}
/**
 * 模块-distroFilter配置对象
 */
export interface DistroFilterConfig {
    moduleName: string;
    distroFilterObj: DistroFilterBuildOpt | undefined;
}
/**
 * 模块-target配置对象
 */
export interface ModuleTargetOpt {
    moduleName: string;
    target: ModuleTargetBuildOpt | undefined;
}
