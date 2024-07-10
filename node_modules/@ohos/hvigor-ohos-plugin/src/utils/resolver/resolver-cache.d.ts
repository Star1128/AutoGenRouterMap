/**
 * 为resolver提供缓存机制
 */
export declare class ResolverCache {
    private static cacheMap;
    static has(key: string): boolean;
    static get(key: string): string | undefined;
    static set(key: string, val: string): Map<string, string>;
    static clear(): void;
}
