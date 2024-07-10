import { ModuleTaskService } from '../service/module-task-service.js';
import { TargetTaskService } from '../service/target-task-service.js';
import { AbstractModuleHookTask } from './abstract-module-hook-task.js';
/**
 * 在Hsp/har中组装Hap打包的任务流,用于生成ohosTest的Hap包
 *
 * @since 2024/3/5
 */
export declare class GenOnDeviceTestHap extends AbstractModuleHookTask {
    constructor(moduleService: ModuleTaskService, isFaMode: boolean);
    initTaskDepends(taskTargetService: TargetTaskService): void;
    /**
     * 是否跳过生成带签名的hap的步骤
     *
     * @private
     */
    private skipSignHap;
}
