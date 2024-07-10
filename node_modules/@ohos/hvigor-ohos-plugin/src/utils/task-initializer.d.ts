import { AbstractModulePlugin } from '../plugin/common/abstract-module-plugin.js';
import { TargetTaskService } from '../tasks/service/target-task-service.js';
import { TaskCreatorManager } from '../tasks/task-creator.js';
export declare class TaskInitializer {
    /**
     *
     * @param plugin
     */
    static initializeHap(plugin: AbstractModulePlugin): TaskCreatorManager;
    static initializeHsp(plugin: AbstractModulePlugin): TaskCreatorManager;
    /**
     *
     * @param plugin
     */
    static initializeHar(plugin: AbstractModulePlugin): TaskCreatorManager;
    private static commonHap;
    private static initializeCommonHookTasks;
    private static initializeTargetTasks;
    /**
     * target任务初始化入口
     *
     * @param service
     * @param creatorManager
     * @private
     */
    static targetInitialize(service: TargetTaskService, creatorManager: TaskCreatorManager): void;
    private static hapTasksInitialize;
    private static hspTasksInitialize;
    private static harTasksInitialize;
    /**
     * hap/hsp所需任务, har不需要
     *
     * @param service
     * @param creatorManager
     * @private
     */
    private static tasksInitialize;
    /**
     * hap/hsp/har所需任务
     *
     * @param service
     * @param creatorManager
     * @private
     */
    private static initializeCommonTargetTasks;
}
