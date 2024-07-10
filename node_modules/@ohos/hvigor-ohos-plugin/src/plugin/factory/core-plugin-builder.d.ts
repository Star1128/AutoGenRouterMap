import { Module } from '@ohos/hvigor';
import { CoreModuleModelImpl } from '../../model/module/core-module-model-impl.js';
import { ProjectModel } from '../../model/project/project-model.js';
/**
 * PluginBuilder的公共基类
 *
 * @since 2023/02/01
 */
export declare class CorePluginBuilder {
    protected readonly module: Module;
    constructor(module: Module);
    createModuleModel(projectModel: ProjectModel, isHapModule: boolean): CoreModuleModelImpl;
}
