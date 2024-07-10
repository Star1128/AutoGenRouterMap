import { FileSet } from '@ohos/hvigor';
import { TaskInputValue } from '@ohos/hvigor';
import { TargetTaskService } from '../service/target-task-service.js';
import { OhosHapTask } from '../task/ohos-hap-task.js';
/**
 * 为har生成一个假的manifest
 *
 * @since 2022/3/1
 */
export declare class LegacyGenerateHarJsManifest extends OhosHapTask {
    private _log;
    private previewPage;
    private readonly _moduleModel;
    private readonly _configOpt;
    private readonly _minPlatformVersion;
    constructor(taskService: TargetTaskService);
    initTaskDepends(): void;
    private static getWindowObj;
    declareInputs(): Map<string, TaskInputValue>;
    declareOutputFiles(): FileSet;
    protected doTaskAction(): void;
    private getManifestPages;
    private generateJsonInfo;
}
