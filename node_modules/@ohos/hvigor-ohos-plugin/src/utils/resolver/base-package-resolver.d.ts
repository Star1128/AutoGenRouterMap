import { OhosLogger } from '../log/ohos-logger.js';
export declare class BasePackageResolver {
    private readonly packageFileWord;
    private readonly moduleDirWord;
    constructor(packageFileWord: string, moduleDirWord: string);
    /**
     * 基于类node_modules的结构，向上寻找
     * @param {string} moduleName
     * @param {string} initDir
     * @returns {string | null}
     */
    resolvePackagePath(moduleName: string, initDir: string, log?: OhosLogger): string | undefined;
}
