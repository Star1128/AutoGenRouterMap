import { FileSet } from '@ohos/hvigor';
import { TargetTaskService } from '../service/target-task-service.js';
import { OhosHapTask } from '../task/ohos-hap-task.js';
/**
 * 处理资源增量编译时，restool不复制resources目录，手动copy profile路由配置文件
 * 此任务要处理好增量，因为会写入res目录，输出会影响以res目录作为输入的任务。
 */
export declare class CopyPreviewProfile extends OhosHapTask {
    private readonly profilePath;
    private readonly targetProfilePath;
    constructor(taskService: TargetTaskService);
    initTaskDepends(): void;
    declareInputFiles(): FileSet;
    declareOutputFiles(): FileSet;
    protected doTaskAction(): void;
}
