import { TaskDetails } from '@ohos/hvigor';
import { TargetTaskService } from '../service/target-task-service.js';
import { OhosHarTask, OhPackageJsonOpt, PackageJsonOpt } from '../task/ohos-har-task.js';
export declare let packageJsonValidMainField: string | undefined;
/**
 * 闭源Har打包发布前需要对package.json文件进行处理和增加一些信息
 * 当前该任务执行处理很快,先不需要做增量
 */
export declare abstract class CoreProcessPackageJson extends OhosHarTask {
    protected readonly generatePmDir: string;
    protected constructor(taskService: TargetTaskService, taskDetails: TaskDetails);
    protected doTaskAction(): void;
    private getGeneratePackageJsonObj;
    protected abstract addArtifactType(packageJsonObj: PackageJsonOpt | OhPackageJsonOpt): void;
    private getDefaultTypesValueByMainField;
    initTaskDepends(): void;
    private replaceMainFieldSuffix;
}
