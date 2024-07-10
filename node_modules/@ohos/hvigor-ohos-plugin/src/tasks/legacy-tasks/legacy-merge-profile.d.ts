import { FileSet } from '@ohos/hvigor';
import { ConfigJson } from '../../options/configure/config-json-options.js';
import { AbstractMergeProfile } from '../abstract-merge-profile.js';
import { TargetTaskService } from '../service/target-task-service.js';
import ConfigOptObj = ConfigJson.ConfigOptObj;
/**
 * 合并config.json
 *
 * @since 2022/1/19
 */
export declare class LegacyMergeProfile extends AbstractMergeProfile {
    private _log;
    private _moduleTargetRes;
    private _appBundleName;
    private readonly _harLibs;
    private readonly _mergedModuleJson;
    constructor(taskService: TargetTaskService);
    initTaskDepends(): void;
    protected initHarModuleDepends(): void;
    mergeDslConfig(configOpt: ConfigOptObj): void;
    protected doTaskAction(): void;
    private mergeAsanAndTsan;
    private mergeAppEnvironmentConfig;
    supportLiteDeviceModule(mergedConfigOpt: ConfigOptObj): boolean;
    private mergeAllConfigOpt;
    /**
     * 合并对象。策略：
     * 1. hap不为空，har为空：合并结果为hap的值
     * 2. hap为空，har不为空：合并结果为har的值
     * 3. hap与har的值相同：合并结果为hap的值
     * 4. hap与har的值不同：需要mergeRule
     *
     * @param mainModel 主模型对象
     * @param subModel 副模型对象
     * @param {string} clazz 当前合并对象的标签字段
     * @param needCleanMergeRule 是否需要清除MergeRule
     * @returns {any} 合并后的模型
     * @private
     */
    private mergeModel;
    /**
     * 对合并时对象为数组时的处理。
     * 对string[]，可以直接取并集；
     * 对object[]，同样是取并集，但以name字段作为并集的依据，需要合并name字段冲突的对象
     *
     * @param {any[]} mainValue
     * @param {any[]} subValue
     * @param {string} field
     * @param needCleanMergeRule
     * @returns {any[]}
     * @private
     */
    private mergeList;
    /**
     * 在判断冲突对象时，需要由一个UniqueKey作为识别位判断是否冲突。这个函数是用来在一个list中找到与model冲突的object的。
     * @param {Option[]} list 目标数组
     * @param {Option} model 提供uniqueKey的对象
     * @param {string} field 当前所在的option字段
     * @returns {Option | null} 若找到冲突的object，返回它，否则返回null
     * @private
     */
    private findObjectByUniqueKey;
    /**
     * 获取当前model的uniqueKey
     * @param {Option} model 当前model
     * @param {string} clazz 当前model所属的字段
     * @returns {string | null} 如果有uniqueKey，返回它，否则返回null
     * @private
     */
    private static getUniqueKey;
    /**
     * 对冲突的model，需要根据mergeRule来进行合并
     * - remove标记合并后，需要移除的属性
     * - replace标记合并冲突时需要替换的标签，始终保留高优先级的值
     *
     * @param {Option} mergeValue 主合并的model
     * @param {Option} subValue 副model
     * @returns {Option} 合并后的model
     * @private
     */
    private mergeRule;
    /**
     * 合并实际上应该是map类型的对象
     *
     * @param {Option} mainValue
     * @param {Option} subValue
     * @param {boolean} flag
     * @param {string} key
     * @param needCleanMergeRule
     * @returns {Option}
     * @private
     */
    private mergeMap;
    /**
     * 判断当前model是否有配相对应的mergeRule来合并，如果mergeRule配置有误则报错
     *
     * @param {Option} mainModel 主model
     * @param {Option} subModel 副model
     * @param {string} key 需要检查的键
     * @param {string} clazz 当前的字段
     * @private
     */
    private checkFieldRule;
    /**
     * 处理占位符
     *
     * @param {Option} config 当前model
     * @param {string} clazz 当前字段
     * @returns {Option}
     * @private
     */
    private disposePlaceHolder;
    static enumInclude<T>(enumObj: T, value: string): boolean;
    private static handleBooleanMerge;
    private static handleStringOrNumberMerge;
    private handleArrayMerge;
    private handleMapMerge;
    declareInputFiles(): FileSet;
    declareOutputFiles(): FileSet;
}
