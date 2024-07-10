import { Module } from '@ohos/hvigor';
import { ProjectModelImpl } from '../../model/project/project-model-impl.js';
import { AbstractModulePlugin } from '../common/abstract-module-plugin.js';
import { HapPlugin } from '../hap-plugin.js';
import { HarPlugin } from '../har-plugin.js';
import { HspPlugin } from '../hsp-plugin.js';
import { CorePluginBuilder } from './core-plugin-builder.js';
export declare class PluginBuilder extends CorePluginBuilder {
    private _log;
    constructor(module: Module);
    createStageHapPlugin(): HapPlugin;
    createStageHspPlugin(): HspPlugin;
    createStageHarPlugin(): HarPlugin;
    initPluginParam(plugin: AbstractModulePlugin, isHapModule: boolean): AbstractModulePlugin;
    setUpModulePlugin(plugin: AbstractModulePlugin): void;
    createProjectModel(): ProjectModelImpl;
}
