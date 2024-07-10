import { DistroFilterConfig, DistroFilterHandler } from './distro-filter-handler.js';
/**
 * screenShape对象校验
 * policy:include/exclude
 * value:["rect","circle"]
 */
export declare class ScreenShapeHandler extends DistroFilterHandler {
    validateDistroFilterRequest(sourceDistroFilterConfig: DistroFilterConfig, targetDistroFilterConfig: DistroFilterConfig): void;
    getDimensionValue(distroFilterConfig: DistroFilterConfig): string[] | undefined;
}
