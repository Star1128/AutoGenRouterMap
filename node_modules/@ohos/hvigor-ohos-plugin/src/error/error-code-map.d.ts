import { HvigorTaskGroupType } from '@ohos/hvigor/src/base/external/task/core-task.js';
import { ApiType } from '../project/data/hap-extra-info.js';
import { TaskGroupType } from '../tasks/common/task-names.js';
/**
 * Error Code Map
 */
export declare namespace ECM {
    /**
     * 模型
     * 这里的unexpected是指两种模型都会执行
     * @type {string}
     */
    type ApiTypeKey = 'unexpected' | ApiType.FA | ApiType.STAGE;
    const ApiTypeMap: Record<ApiTypeKey, string>;
    function getApiTypeEC(apiType: ECM.ApiTypeKey): string;
    /**
     * 模块类型
     * @type {string}
     */
    type ModuleTypeKey = 'unexpected' | 'app' | 'hap' | 'hsp' | 'har';
    const ModuleTypeMap: Record<ModuleTypeKey, string>;
    function getModuleTypeEC(moduleType: ECM.ModuleTypeKey): string;
    /**
     * 功能/任务分组
     * @type {string}
     */
    type TaskGroupKey = TaskGroupType | HvigorTaskGroupType;
    const taskGroupMap: Record<TaskGroupKey, string>;
    function getTaskGroupEC(taskGroup: string): string;
    /**
     * Details Error Code Enum 具体报错的错误码
     */
    enum DECE {
        UNEXPECTED = "000",
        COMMON_UTILS = "100",
        PROCESS_UTILS_HANDLE_EXCEPTION = "110",
        SCHEMA_VALIDATION = "200",
        SERVICE_LOGIC = "300",
        SDK_INVOKING = "400",
        ARKTS_COMPILER = "410"
    }
}
