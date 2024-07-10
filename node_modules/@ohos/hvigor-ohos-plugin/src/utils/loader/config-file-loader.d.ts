/**
 * 所有的配置文件都从这里统一加载进内存，其他地方使用配置文件中的配置都从这里获取
 */
declare class ConfigFileLoader {
    configFileJsonMap: Map<string, any>;
    clean(): void;
    getConfigFileJson(filePath: string): any;
    setConfigFileJson(filePath: string, fileJsonObj: any): void;
}
export declare const configFileLoader: ConfigFileLoader;
export {};
