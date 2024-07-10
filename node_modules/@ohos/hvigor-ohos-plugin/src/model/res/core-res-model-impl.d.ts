import { ResModel } from './res-model.js';
/**
 * 不同target对应的资源集合模型
 *
 * @since 2022/2/23
 */
export declare class CoreResModelImpl implements ResModel {
    private readonly jsonPath;
    private readonly resourcePath;
    constructor(jsonPath: string, resourcePath: string);
    getJsonContent(): string;
    getResourcePath(): string;
    getJsonPath(): string;
}
