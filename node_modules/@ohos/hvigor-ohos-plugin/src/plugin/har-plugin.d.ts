import { Module } from '@ohos/hvigor';
import { AbstractHarModulePlugin } from './common/abstract-har-module-plugin.js';
/**
 * 对外暴露har级别的接口和任务的plugin
 *
 * @since 2021/12/16
 */
export declare class HarPlugin extends AbstractHarModulePlugin {
    constructor(module: Module);
    initHarTasks(): void;
}
