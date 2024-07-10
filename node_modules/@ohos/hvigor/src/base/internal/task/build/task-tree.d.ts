import { HvigorCoreNode } from '../../../external/core/hvigor-core-node.js';
import { DefaultTask } from '../../../external/task/default-task.js';
/**
 * 输出打印指定Node的task DAG图结构
 *
 * @since 2022/5/31
 */
export declare class TaskTree extends DefaultTask {
    constructor(hvigorNode: HvigorCoreNode);
    registryAction(): Function;
    private renderTaskGraph;
    private getEndNodePrefix;
    private getExpandNodePrefix;
}
