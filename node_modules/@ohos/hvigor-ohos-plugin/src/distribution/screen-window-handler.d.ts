import { DistroFilterConfig, DistroFilterHandler } from './distro-filter-handler.js';
/**
 * screenWindow对象校验
 * policy:include/exclude
 * value:["454*454"...]
 */
export declare class ScreenWindowHandler extends DistroFilterHandler {
    validateDistroFilterRequest(sourceDistroFilterConfig: DistroFilterConfig, targetDistroFilterConfig: DistroFilterConfig): void;
    getDimensionValue(distroFilterConfig: DistroFilterConfig): number[] | string[] | undefined;
}
