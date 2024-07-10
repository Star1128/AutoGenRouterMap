import { ModuleModelImpl } from '../model/module/module-model-impl.js';
import { ModuleJson } from '../options/configure/module-json-options.js';
import { ModuleTargetData } from './data/hap-task-target-data.js';
import { TargetTaskService } from './service/target-task-service.js';
import { FileSet } from '@ohos/hvigor';
import { TaskInputValue } from '@ohos/hvigor';
import { ConfigJson } from '../options/configure/config-json-options.js';
import { AbstractMakePackInfo } from './abstract-make-pack-info.js';
/**
 * 生成Stage模型hap级别的pack.info
 *
 * @since 2022/5/9
 */
export declare class MakePackInfo extends AbstractMakePackInfo {
    private log;
    declareInputs(): Map<string, TaskInputValue>;
    declareInputFiles(): FileSet;
    constructor(taskService: TargetTaskService);
    initTaskDepends(): void;
    protected doTaskAction(): void;
    private processExtensionAbilities;
    /**
     * 根据metadata标签得到存储卡片信息的文件路径，并根据文件内容得到卡片信息
     *
     * @param metadata module.json5中的metada标签下的信息
     * @param moduleModel 模块的数据管理对象
     * @param targetName 模块的target名
     * @return forms 多个卡片信息对象
     */
    private static processMetaData;
    /**
     * 获取模块资源路径集合
     *
     * @param moduleModel moduleModel
     * @param targetName 当前targetName
     * @return formPathList metadata下resource路径集合
     */
    private static getFormPathList;
    /**
     * 解析meatadata标签下的卡片资源路径，格式如$profile:form_config
     *
     * @param resourcePath meatadata标签下的原始卡片资源路径
     * @return string 卡片信息资源路径
     */
    private static processResourcePath;
    getModuleObj(deviceTypes: string[], moduleModel: ModuleModelImpl, apiVersion: ConfigJson.ApiVersionObj | undefined, targetName: string): object;
    protected getPackageObj(targetData: ModuleTargetData, moduleOptObj: ModuleJson.ModuleOptObj, noSuffixHapName: string): object[];
}
