import { DefaultTask, HvigorCoreNode } from '@ohos/hvigor';
import { TaskService } from '../service/task-service.js';
/**
 * hvigor coverageCollect命令 任务
 *
 * @since 2023/8/25
 */
export declare class CoverageCollect extends DefaultTask {
    private readonly projectPath;
    private readonly reportPath;
    private readonly coverageFile;
    private readonly _taskService;
    constructor(node: HvigorCoreNode, taskService: TaskService);
    registryAction(): Function;
}
