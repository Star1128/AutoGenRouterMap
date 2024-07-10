export interface NativeCxxIndex {
    cmake?: Cmake;
    objects?: Model[];
    reply: Reply;
}
export interface Cmake {
    generator?: Generator;
    paths?: Paths;
    version?: CmakeVersion;
}
export interface Generator {
    name?: string;
}
export interface Paths {
    cmake?: string;
    cpack?: string;
    ctest?: string;
    root?: string;
}
export interface CmakeVersion {
    isDirty?: boolean;
    major?: number;
    minor?: number;
    patch?: number;
    string?: string;
    suffix?: string;
}
export interface Model {
    jsonFile: string;
    kind: string;
    version?: ModelVersion;
}
export interface ModelVersion {
    major?: number;
    minor?: number;
}
export interface Reply {
    [kind: string]: Model;
}
