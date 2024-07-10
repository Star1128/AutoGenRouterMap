import { TaskInputValue } from '@ohos/hvigor';
import { RuntimeOnlyObj } from '../options/build/build-opt.js';
import { ModuleTargetData } from '../tasks/data/hap-task-target-data.js';
import { OhosLogger } from './log/ohos-logger.js';
/**
 * 生成buildProfile.ets文件
 *
 * @param buildProfileData
 * @param targetData
 * @param _log
 */
export declare const normalizedFileData: (buildProfileData: object, targetData: ModuleTargetData, _log: OhosLogger) => string;
export declare const generateConstVariable: (buildProfileData: object, targetData: ModuleTargetData, _log: OhosLogger) => string;
export declare const generateExportClass: (buildProfileData: object) => string;
export declare const getRuntimeOnlyObjMap: (modulePath: string, runtimeOnlyObj: RuntimeOnlyObj | undefined, unionDependencyList: any[], suffix?: number | string) => Map<string, TaskInputValue>;
