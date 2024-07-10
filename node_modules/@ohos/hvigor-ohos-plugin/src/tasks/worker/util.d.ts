import { ProjectConfig } from '@ohos/hvigor-arkts-compose';
/**
 * 设置环境变量，供loader使用，后续等loader适配完成可删除
 *
 * @param config 编译参数
 */
export declare const generateLoaderEnv: (config: ProjectConfig) => void;
export declare function setLogLevel(level: string): void;
export declare function onTerminateWorker(): {
    updatePkgName2SourceRoots(data: Record<string, string[]>): void;
};
