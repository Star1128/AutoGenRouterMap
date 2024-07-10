import { HvigorCoreNode } from '../../../external/core/hvigor-core-node.js';
import { DefaultTask } from '../../../external/task/default-task.js';
/**
 * 通过执行hvigor 命令打印Hvigor Node的任务详细信息
 * eg.hvigor tasks
 *
 * @since 2022/5/31
 */
export declare class Tasks extends DefaultTask {
    constructor(hvigorNode: HvigorCoreNode);
    registryAction(): Function;
    private transformInfos;
}
