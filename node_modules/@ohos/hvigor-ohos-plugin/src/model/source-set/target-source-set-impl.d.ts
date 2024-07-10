import { ModuleTargetRes } from '../res/res-model.js';
import { CoreSourceSetImpl } from './core-source-set-impl.js';
import { TargetSourceSetModel } from './source-set-model.js';
/**
 * module中每个target对应的一个sourceSet对象
 *
 */
export declare class TargetSourceSetImpl extends CoreSourceSetImpl implements TargetSourceSetModel {
    constructor(sourceSetRoot: string);
    getModuleTargetRes(): ModuleTargetRes;
    getTargetSourceSetModuleName(): string | undefined;
}
