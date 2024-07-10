import { DistroFilterConfig, DistroFilterHandler } from './distro-filter-handler.js';
/**
 * apiVersion对象校验
 * policy:include/exclude
 * value:[3,30]
 */
export declare class ApiVersionHandler extends DistroFilterHandler {
    validateDistroFilterRequest(sourceDistroFilterConfig: DistroFilterConfig, targetDistroFilterConfig: DistroFilterConfig): void;
    getDimensionValue(distroFilterConfig: DistroFilterConfig): number[] | undefined;
    private getApiVersionScope;
}
