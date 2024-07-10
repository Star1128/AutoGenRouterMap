import { LegacyModuleTargetRes } from '../res/res-model.js';
import { CoreSourceSetImpl } from './core-source-set-impl.js';
import { LegacyTargetSourceSetModel } from './source-set-model.js';
export declare class LegacyTargetSourceSetImpl extends CoreSourceSetImpl implements LegacyTargetSourceSetModel {
    constructor(sourceSetRoot: string);
    getLegacyModuleTargetRes(): LegacyModuleTargetRes;
    getTargetSourceSetModuleName(): string | undefined;
}
