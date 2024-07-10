/**
 * 只保留hap中配置的options
 */
export declare enum KeepHapOptions {
    APP_OPTIONS = "app",
    ARK_OPTIONS = "ark",
    NETWORK_OPTIONS = "network",
    DISTRO_OPTIONS = "distro"
}
/**
 * 只保留hap中配置的module中的属性
 */
export declare enum KeepModuleAttr {
    PACKAGE = "package",
    NAME = "name",
    DESCRIPTION = "description",
    DEVICE_TYPE = "deviceType",
    SUPPORTED_MODES = "supportModes",
    SHORTCUTS = "shortcuts",
    DISTRO = "distro"
}
/**
 * ability中需要合并取合集的List属性
 */
export declare enum KeepAbilityMergeList {
    PERMISSION = "permissions",
    BACKGROUND_MODES = "backgroundModes",
    CONFIG_CHANGES = "configChanges",
    META_DATA = "metaData"
}
/**
 * 当hap和har同时有该属性时，使用hap的属性
 * 当hap和har只有一个有该属性时，使用非空的属性
 */
export declare enum KeepOneOfThem {
    ALLOW_COMPONENTS_PROXY = "allowComponentsProxy",
    ALLOW_CLASS_MAP = "allowClassMap"
}
/**
 * 需要处理${bundleName}占位符的标签
 */
export declare enum NeedDisposePlaceholder {
    PERMISSIONS = "permissions",
    READ_PERMISSIONS = "readPermission",
    WRITE_PERMISSIONS = "writePermission",
    NAME = "name",
    URI = "uri"
}
/**
 * 需要处理${bundleName}占位符的标签
 */
export declare enum HasPlaceholderOptions {
    ABILITIES = "abilities",
    DEF_PERMISSIONS = "defPermissions",
    DEF_PERMISSION_GROUPS = "defPermissionGroups"
}
/**
 * 遵循map类合并规则的标签
 */
export declare enum IsMapFields {
    MERGE_RULE = "mergeRule",
    DEVICE_CONFIG = "deviceConfig"
}
/**
 * uniqueKey为name的options list
 */
export declare enum UniqueKeyEqualsName {
    DOMAINS = "domains",
    PARAMETERS = "parameters",
    RESULTS = "results",
    CUSTOMIZE_DATA = "customizeData",
    COMMON_EVENTS = "commonEvents",
    JS = "js",
    REQ_PERMISSIONS = "reqPermissions",
    DEF_PERMISSIONS = "defPermissions",
    DEF_PERMISSION_GROUPS = "defPermissionGroups"
}
/**
 * 需要mergeRule的标签
 */
export declare enum IsNeedMergeRule {
    ABILITIES = "abilities",
    COMMON_EVENTS = "commonEvents",
    DEF_PERMISSIONS = "defPermissions",
    DEF_PERMISSION_GROUPS = "defPermissionGroups",
    JS = "js",
    REQ_PERMISSIONS = "reqPermissions",
    CUSTOMIZE_DATA = "customizeData",
    PARAMETERS = "parameters",
    RESULTS = "results"
}
