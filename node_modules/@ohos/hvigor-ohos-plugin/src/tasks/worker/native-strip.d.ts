import { DebugSymbol } from '../../options/build/build-opt.js';
export interface StripOptions {
    debugSymbol: DebugSymbol | undefined;
    strip: boolean;
    exclude: string[];
    intermediatesProcessLibs: string;
    sdkLlvmStripPath: string;
    strippedNativeLibs: string;
    moduleName: string;
    taskName: string;
    cacheFilePath: string;
    lastCache: string;
    collectAllLibs: boolean | undefined;
}
export declare function strip(stripOptions: StripOptions): Promise<void>;
/**
 * 清除掉上次编译但本次已经在libs文件夹下没有了的.so文件
 * @param processStrippedLibsDir
 * @param processLibsDir
 */
export declare function cleanStrippedSo(processStrippedLibsDir: string, processLibsDir: string): void;
/**
 * 清除dir路径下的所有软连接，如果dir是软连接则删除，如果是文件夹则递归删除里面的所有软连接
 * @param destPath 目标路径
 */
export declare function cleanSymbolicLink(destPath: string): void;
