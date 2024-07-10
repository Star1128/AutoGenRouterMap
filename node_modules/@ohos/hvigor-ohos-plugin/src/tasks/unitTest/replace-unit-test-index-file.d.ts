import { TargetTaskService } from '../service/target-task-service.js';
import { OhosHapTask } from '../task/ohos-hap-task.js';
/**
 * 单元测试 stage模型中替换的入口文件
 */
export declare class ReplaceUnitTestIndexFile extends OhosHapTask {
    private _log;
    private PAGE_JSON;
    private PAGE_JSON_FILE;
    private PAGE_JSON_RESOURCE;
    constructor(taskService: TargetTaskService);
    initTaskDepends(): void;
    protected doTaskAction(): void;
    private writeModuleJson;
    private writeMainPages;
}
