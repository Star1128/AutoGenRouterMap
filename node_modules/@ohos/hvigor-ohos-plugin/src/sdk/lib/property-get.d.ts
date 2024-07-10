/**
 * 读取项目目录下local.properties文件
 *
 * @since 2021-12-16
 */
export declare class Property {
    private _log;
    private _properties;
    private readonly _isHarmonyOS;
    constructor(isHarmonyOS?: boolean);
    /**
     * 读取当前命令行执行的路径下的local.properties的内容
     *
     * @returns {string} local.properties的内容
     */
    private _readFile;
    getProperty(key: string): string;
    getSdkDir(): string;
    getHosSdkDir(): string;
    getArkUIXSdkDir(): string;
    private validatePath;
    private _readPath;
    private _setPathIfNotExist;
    private _setProperty;
}
