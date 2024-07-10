import { ProjectModel } from '../model/project/project-model.js';
import { ProjectBuildProfile } from '../options/build/project-build-profile.js';
import ProductBuildOpt = ProjectBuildProfile.ProductBuildOpt;
export declare class OneSdkValidator {
    private static _log;
    /**
     * 根据product与target下runtimeOS配置计算runtimeOS
     *
     * @param projectModel
     */
    static evlProductRuntimeOS(projectModel: ProjectModel): string;
    /**
     * 版本号校验集合
     *
     * @param projectModel
     */
    static apiInspection(projectModel: ProjectModel): void;
    private static apiTypeCheck;
    private static versionTypeCheck;
    /**
     * 调用sdk相关接口校验harmonyOS sdkVersion是否符合配置规格 如4.0.0(10)
     *
     * @param projectModel  工程对象
     * @param isHarmonyOS  是否为HarmonyOS工程
     * @param meta  经过处理的sdkVersion信息
     * @param curVersionName  当前校验的sdkVersion名称
     * @private
     */
    private static versionCompatibilityCheck;
    /**
     * 如果获取到了hosSdkVersion则需要判断baseApi是否相等 如果为错误的配置如3.1.0(10)则返回false
     *
     * @param hosSdkVersion 通过sdk提供的接口获取到的hosSdkVersion信息
     * @param version  apiVersion信息，如4.0.0(10)中的10
     * @private
     */
    private static isBaseApiEqual;
    /**
     * 校验MSF版本
     * compileSdkVersion >= targetSdkVersion >= compatibleSdkVersion
     *
     * @param projectModel
     * @param compileSdkVersion
     * @param compatibleSdkVersion
     * @param targetSdkVersion
     * @private
     */
    private static msfCompare;
    /**
     * 检查OpenHarmony product下版本号是否大于等于10
     *
     * @param version
     * @private
     */
    static ohosProductApiValid(version: number | string | undefined): boolean;
    /**
     * 返回 1 version0 > version1
     * 返回 -1 version0 < version1
     * 返回 0 version0 === version1
     *
     * @param version0
     * @param version1
     */
    static compareMsf(version0: string, version1: string): 1 | 0 | -1;
    /**
     * 解析M.S.F版本API
     *
     * @param version
     * @private
     */
    private static parseMsf;
    /**
     * 判断API版本的类型
     * ONE_MSF one sdk并且版本写法为 M.S.F(API)
     * ONE_NUM one sdk并且版本写法为数字 10
     * ORIGINAL 老版本写法, API声明到app下并且版本写法为数字 9
     *
     * @param projectModel
     * @param product
     */
    static evlApiModel(projectModel: ProjectModel, product: ProductBuildOpt): ApiModel;
}
export declare enum ApiModel {
    ORIGINAL = 0,
    ONE_MSF = 1,
    ONE_NUM = 2,
    UNDEFINED = 4
}
