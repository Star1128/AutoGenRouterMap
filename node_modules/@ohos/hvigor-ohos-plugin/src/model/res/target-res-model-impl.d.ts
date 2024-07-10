import { ModuleJson } from '../../options/configure/module-json-options.js';
import { CoreResModelImpl } from './core-res-model-impl.js';
import { ModuleTargetRes } from './res-model.js';
/**
 * Stage Module 的不同target对应的资源集合
 *
 * @since 2022/2/23
 */
export declare class ModuleTargetResImpl extends CoreResModelImpl implements ModuleTargetRes {
    constructor(sourceSetRoot: string);
    getModuleJsonOpt(): ModuleJson.ModuleOptObj;
    getFormJsonOpt(formPath: string): ModuleJson.FormsObj;
}
