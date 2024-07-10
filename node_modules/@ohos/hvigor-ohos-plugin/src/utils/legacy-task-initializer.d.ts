import { Module } from '@ohos/hvigor';
import { AbstractModulePlugin } from '../plugin/common/abstract-module-plugin.js';
import { AbstractModuleHookTask } from '../tasks/hook/abstract-module-hook-task.js';
import { ModuleTaskService } from '../tasks/service/module-task-service.js';
import { TargetTaskService } from '../tasks/service/target-task-service.js';
export declare const legacyHapTasksInitialize: (plugin: AbstractModulePlugin) => void;
export declare const legacyHarTasksInitialize: (plugin: AbstractModulePlugin) => void;
export declare const legacyCommonHooksInitialize: (moduleTaskService: ModuleTaskService) => AbstractModuleHookTask[];
export declare const legacyTasksInitialize: (module: Module, service: TargetTaskService) => void;
