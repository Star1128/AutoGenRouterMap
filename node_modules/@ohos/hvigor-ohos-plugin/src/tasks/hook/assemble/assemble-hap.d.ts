import { ModuleTaskService } from '../../service/module-task-service.js';
import { TargetTaskService } from '../../service/target-task-service.js';
import { AbstractModuleHookTask } from '../abstract-module-hook-task.js';
/**
 * 组装Hap打包的任务流
 *
 * @since 2022/1/20
 */
export declare class AssembleHap extends AbstractModuleHookTask {
    constructor(moduleService: ModuleTaskService, isFaMode: boolean);
    initTaskDepends(taskTargetService: TargetTaskService): void;
    /**
     * 是否跳过生成带签名的hap的步骤
     *
     * @private
     */
    private skipSignHap;
}
