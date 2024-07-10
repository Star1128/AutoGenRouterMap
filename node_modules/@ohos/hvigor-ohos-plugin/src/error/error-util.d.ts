import { ECM } from './error-code-map.js';
export declare function recordErrorCode(apiType: ECM.ApiTypeKey, moduleType: ECM.ModuleTypeKey, taskGroup: string): void;
/**
 * 记录具体错误码
 * @param {string} dece 具体报错的错误码
 */
export declare function recordDECE(dece: ECM.DECE): void;
