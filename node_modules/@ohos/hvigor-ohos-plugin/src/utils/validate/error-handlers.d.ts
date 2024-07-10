import { ErrorInfo } from './validate-util.js';
/**
 * 判断config.json/module.json5中deviceTypes是否存在phone，提示warning，构建不失败
 * 适用schema校验：config.json，module.json5
 * @param {ErrorInfo[]} errorInfos
 * @param {object} checkedFile
 */
export declare function removeLegacyPhoneSupport(errorInfos: ErrorInfo[], checkedFile?: object): ErrorInfo[];
/**
 * 对startWindow没有配置相关的问题，在solution中添加相应的跳转链接
 * 适用schema校验：module.json5
 * @param {ErrorInfo[]} errorInfos
 */
export declare function handleStartWindowErrors(errorInfos: ErrorInfo[]): ErrorInfo[];
/**
 * 对entryModules为空时报错的相关校验的补充说明
 * 适用schema校验：module级别build-profile.json5
 * @param {ErrorInfo[]} errorInfos
 */
export declare function handleEntryModulesErrors(errorInfos: ErrorInfo[]): ErrorInfo[];
