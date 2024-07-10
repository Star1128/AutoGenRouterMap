export declare enum ModuleType {
    Entry = "entry",
    Feature = "feature",
    Har = "har",
    Shared = "shared"
}
/**
 * 为枚举类型ModuleType附加方法
 *
 * @since 2022/2/25
 */
export declare namespace ModuleType {
    function valueOf(moduleTypeStr: string): ModuleType;
}
