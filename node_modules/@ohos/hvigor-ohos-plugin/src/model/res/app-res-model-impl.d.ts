import { AppJson } from '../../options/configure/app-json-options.js';
import { CoreResModelImpl } from './core-res-model-impl.js';
import { AppRes } from './res-model.js';
/**
 * Stage模型的App级别的资源
 *
 * @since 2022/2/23
 */
export declare class AppResModelImpl extends CoreResModelImpl implements AppRes {
    constructor(sourceSetRoot: string);
    getAppResOpt(): AppJson.AppOptObj;
}
