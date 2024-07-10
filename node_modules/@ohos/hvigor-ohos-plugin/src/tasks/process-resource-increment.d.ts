import { AbstractProcessResourceIncrement } from './abstract/abstract-process-resource-increment.js';
import { TargetTaskService } from './service/target-task-service.js';
/**
 * Stage 模型用于处理和生成Restool增量方式的编译、链接命令参数
 *
 * @since 2022/09/22
 */
export declare class ProcessResourceIncrement extends AbstractProcessResourceIncrement {
    protected FIRST_SUPPORT_RESTOOL_IDSMAP_APIVERSION: number;
    protected idsMapDir: string;
    constructor(taskService: TargetTaskService);
    initCommandBuilder(): void;
}
