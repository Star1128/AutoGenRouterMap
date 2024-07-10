export interface CmakeCache {
    entries: CacheEntry[];
}
export interface CacheEntry {
    name: string;
    value: string;
    type: string;
    properties?: CacheEntryProperty[];
}
export interface CacheEntryProperty {
    name: string;
    value: string;
}
