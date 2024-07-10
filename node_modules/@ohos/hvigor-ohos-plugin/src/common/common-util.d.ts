/**
 * 判断当前插件是否是单框架版本
 *
 * @return {boolean} true/false
 */
export declare function isSingleFramework(): boolean;
/**
 * 解析$profile形式的配置文件名称
 * ($profile:form_config解析为form_config)
 *
 * @return {string} 返回解析后的名称
 */
export declare function parsingProfileName(srcStr: string): string | undefined;
