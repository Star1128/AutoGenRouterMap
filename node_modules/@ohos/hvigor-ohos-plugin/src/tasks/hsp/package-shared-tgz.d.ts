import { TargetTaskService } from '../service/target-task-service.js';
import { OhosHapTask } from '../task/ohos-hap-task.js';
import { FileSet } from '@ohos/hvigor';
export declare class PackageSharedTgz extends OhosHapTask {
    private readonly _taskService;
    private readonly outputDir;
    private readonly RELEASE;
    private readonly isRelease;
    private readonly tempSharedHspPath;
    private readonly tempSharedHarPath;
    private readonly tgzOutPath;
    private readonly sharedHspName;
    private readonly sharedHspRename;
    private readonly sharedHarName;
    private readonly sharedHspPath;
    private readonly sharedHarPath;
    private readonly _log;
    constructor(taskService: TargetTaskService);
    declareInputFiles(): FileSet;
    declareOutputFiles(): FileSet;
    initTaskDepends(): void;
    /**
     * 只在release模式下执行tgz打包操作
     * @protected
     */
    protected doTaskAction(): Promise<void>;
    private buildTgzPackage;
    private copyTempFiles;
    private removeTempFiles;
}
