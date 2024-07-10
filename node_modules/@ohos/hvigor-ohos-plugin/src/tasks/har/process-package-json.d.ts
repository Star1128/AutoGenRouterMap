import { TargetTaskService } from '../service/target-task-service.js';
import { PackageJsonOpt } from '../task/ohos-har-task.js';
import { CoreProcessPackageJson } from './core-process-package-json.js';
/**
 * 闭源Har打包发布前需要对package.json文件进行处理和增加一些信息
 * 当前该任务执行处理很快,先不需要做增量
 */
export declare class ProcessPackageJson extends CoreProcessPackageJson {
    private readonly generatePackageJsonFilePath;
    constructor(taskService: TargetTaskService);
    protected doTaskAction(): void;
    protected addArtifactType(packageJsonObj: PackageJsonOpt): void;
}
