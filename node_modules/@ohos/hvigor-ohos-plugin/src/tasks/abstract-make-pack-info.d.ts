import { ConfigJson } from '../options/configure/config-json-options.js';
import { ModuleJson } from '../options/configure/module-json-options.js';
import { OhosLogger } from '../utils/log/ohos-logger.js';
import { ModuleTargetData } from './data/hap-task-target-data.js';
import { OhosHapTask } from './task/ohos-hap-task.js';
import ConfigOptObj = ConfigJson.ConfigOptObj;
import ModuleOptObj = ModuleJson.ModuleOptObj;
import { FileSet } from '@ohos/hvigor';
import { TaskInputValue } from '@ohos/hvigor';
import { CoreModuleModelImpl } from '../model/module/core-module-model-impl.js';
/**
 * 生成hap级别的pack.info的抽象类
 *
 * @since 2022/5/21
 */
export declare abstract class AbstractMakePackInfo extends OhosHapTask {
    declareInputs(): Map<string, TaskInputValue>;
    declareOutputFiles(): FileSet;
    /**
     * MakePackInfo和LegacyMakePackInfo生成pack.info的共用流程
     *
     * @param log 日志
     * @param appObj pack.info中app标签对应的数据
     * @param apiVersion module对象中的apiVersion字段
     */
    protected doMakePackInfo(log: OhosLogger, appObj: object, apiVersion?: ConfigJson.ApiVersionObj): void;
    /**
     * 构造packinfo对象
     *
     * @param log 日志
     * @param entryName 关联的entry模块名
     * @param configObj 模块下module.json5或config.json中的信息
     * @param appObj 工程级别描述信息
     * @param modulesObj 模块级别描述信息
     * @param entryConfigObj 关联的entry模块下module.json5或config.json中的信息
     */
    protected buildPackInfo(log: OhosLogger, entryName: string, configObj: ConfigOptObj | ModuleOptObj, appObj: object, modulesObj: object[], entryConfigObj: ConfigOptObj | ModuleOptObj | undefined): void;
    protected processForms(formsObj: ConfigJson.FormsObj[] | ModuleJson.FormObj[] | undefined): object[] | undefined;
    protected processAbilities(abilitiesObj: ConfigJson.AbilitiesObj[] | ModuleJson.AbilityObj[] | undefined): object[] | undefined;
    /**
     * 得到packinfo的packges标签需要的数据
     *
     * @param targetData 模块的target数据
     * @param moduleOptObj 模块下module.json5或config.json中的信息
     * @param noSuffixHapName 生成的无后缀hap包名
     * @param noSuffixLiteHapName 生成的无后缀lite hap包名
     */
    protected abstract getPackageObj(targetData: ModuleTargetData, moduleOptObj: ConfigOptObj | ModuleOptObj, noSuffixHapName: string, noSuffixLiteHapName?: string): object[];
    /**
     * 获取modules标签下单个module对象数据
     *
     * @param deviceTypes 设备类型
     * @param moduleModel 模块数据模型
     * @param apiVersion apiVersion标签对应数据
     * @param targetName target名
     */
    protected abstract getModuleObj(deviceTypes: string[], moduleModel: CoreModuleModelImpl, apiVersion: ConfigJson.ApiVersionObj | undefined, targetName: string): object;
    private outputJSON;
    private getPackInfoObj;
    /**
     * 检查FA模型feature模块所关联的entry模块是否存在对应的target，如果不存在，给出报错提示
     *
     * @param log 日志
     * @param targetName feature模块的target名
     * @param entryName entry模块名
     * @param entryTarget entry模块对应的target数据
     */
    private checkEntryTarget;
    /**
     * 返回entry模块的deviceType，如果entry对应的target不存在，则返回module.json5中的deviceType
     * @param entryTargetData entry模块对应的target数据
     * @param entryModuleModel entry模块模型
     * @returns string[] deviceType列表
     */
    private getEntryDeviceType;
    /**
     * 去除entry模块的deviceType中不存在于feature模块中deviceType的元素，保证其是feature模块中deviceType的子集
     *
     * @param log 日志
     * @param entryName entry模块名
     * @param entryDeviceTypes entry模块的deviceType
     * @param featureDeviceTypes feature模块的deviceType
     * @returns string[] 修剪后deviceType列表
     */
    private getDeviceTypeSubset;
}
