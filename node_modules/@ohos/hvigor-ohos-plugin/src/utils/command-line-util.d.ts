/**
 * 解析命令行中-p module=配置的module和target信息
 *
 * @param configModuleStr -p module=配置的参数
 */
export declare function parseTargets(configModuleStr: string | undefined): Map<string, string[]>;
