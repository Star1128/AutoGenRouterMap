import { RuntimeTypeEnum } from '../../enum/runtime-type-enum.js';
import { Configurable } from '../../options/options.js';
/**
 * 根据配置(Configurable)生成状态码, 通过状态码判断是否支持某种属性
 * 目前支持runtimeOS配置, 若有新的配置可以拓展接口实现
 *
 * status code设计:
 * 1. 使用一串二进制数标记工程状态
 * 2. 使用&判断当前是哪些状态
 * 3. 目前只有runtimeOS维度, 使用4四位即可(见RuntimeTypeEnum), 若后续有其他拓展可拓展成8位, 16位.
 */
export declare class Status {
    private readonly _moduleBuildOpt;
    private readonly _statusCode;
    constructor(moduleProfileOpt: Configurable);
    private initRuntimeStatus;
    getStatusCode(): number;
    /**
     * 判断该状态是否是某个预设的状态
     *
     * @param {RuntimeTypeEnum} runtimeType
     * @returns {boolean}
     */
    is(runtimeType: RuntimeTypeEnum): boolean;
}
/**
 * 获取所有的status, 根据整体的status进行一些全局判断
 */
export declare class FullStatus {
    private _fullStatusCode;
    constructor(statusSet: Status[]);
    /**
     * 判断全局状态中是否包括某个状态
     *
     * @param {RuntimeTypeEnum} runtimeType
     * @returns {boolean}
     */
    has(runtimeType: RuntimeTypeEnum): boolean;
}
