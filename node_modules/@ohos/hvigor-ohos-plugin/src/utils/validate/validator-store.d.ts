import { ValidateFunction } from 'ajv';
/**
 * schema校验函数存储
 * 维护schema校验函数
 *
 * @since 2022/9/14
 */
export declare class ValidatorStore {
    private static validatorMap;
    /**
     * 获取校验函数
     *
     * @param key 函数id
     * @returns {ValidateFunction | undefined} 找到的校验函数
     */
    static getValidator(key: string): ValidateFunction | undefined;
    /**
     * 判断校验函数是否存在
     *
     * @param key 函数id
     * @returns {boolean} 判断结果
     */
    static hasValidator(key: string): boolean;
    /**
     * 添加校验函数
     *
     * @param schemaPath schema路径
     * @param changeAppSchema 是否需要修改app.json5的schema中的properties.app.required
     * @returns {ValidateFunction} 添加的校验函数，如果schemaPath和changeAppSchema对应的校验函数已存在，就返回已有的校验函数
     */
    static addValidator(schemaPath: string, changeAppSchema?: boolean): ValidateFunction;
    static clear(): void;
    /**
     * 提供获取schema校验函数存储map,仓颉覆盖map中的校验函数
     * @returns {Map<string, >} schema校验函数存储map
     */
    static getValidatorMap(): Map<string, ValidateFunction>;
}
