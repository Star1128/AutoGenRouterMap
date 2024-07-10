import { FileSet } from '@ohos/hvigor';
import { TargetTaskService } from '../service/target-task-service.js';
import { OhosHapTask } from '../task/ohos-hap-task.js';
/**
 * 将编译完的ets和js复制到同一个目录下
 */
export declare class MergeNodeAssets extends OhosHapTask {
    private readonly intermediatesOutPath;
    private readonly intermediatesAssetsPath;
    private _log;
    constructor(targetService: TargetTaskService);
    declareInputFiles(): FileSet;
    declareOutputFiles(): FileSet;
    protected beforeTask(): void;
    protected doTaskAction(): void;
    initTaskDepends(): void;
}
