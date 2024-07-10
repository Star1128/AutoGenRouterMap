import { DistroFilterConfig, DistroFilterHandler } from './distro-filter-handler.js';
/**
 * distroFilter校验链入口
 */
export declare class DistroFilterValidateEntrance extends DistroFilterHandler {
    /**
     * @param sourceDistroFilterConfig
     * @param targetDistroFilterConfig
     */
    validateDistroFilterRequest(sourceDistroFilterConfig: DistroFilterConfig, targetDistroFilterConfig: DistroFilterConfig): void;
    getDimensionValue(distroFilterConfig: DistroFilterConfig): number[] | string[] | undefined;
    /**
     * 检查当前工程模块distroFilter对象是否配置
     * @param sourceDistroFilterConfig
     * @param targetDistroFilterConfig
     * @private
     */
    private checkDistroFilterObjEmpty;
}
