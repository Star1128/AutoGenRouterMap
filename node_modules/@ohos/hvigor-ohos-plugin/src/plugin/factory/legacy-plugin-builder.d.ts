import { Module } from '@ohos/hvigor';
import { AbstractModulePlugin } from '../common/abstract-module-plugin.js';
import { LegacyHapPlugin } from '../legacy/legacy-hap-plugin.js';
import { LegacyHarPlugin } from '../legacy/legacy-har-plugin.js';
import { CorePluginBuilder } from './core-plugin-builder.js';
export declare class LegacyPluginBuilder extends CorePluginBuilder {
    private _log;
    constructor(module: Module);
    setUpModulePlugin(plugin: AbstractModulePlugin): void;
    createFaHapPlugin(): LegacyHapPlugin;
    createFaHarPlugin(): LegacyHarPlugin;
    initPluginParam(plugin: AbstractModulePlugin, isHapModule: boolean): AbstractModulePlugin;
    private createProjectModel;
}
