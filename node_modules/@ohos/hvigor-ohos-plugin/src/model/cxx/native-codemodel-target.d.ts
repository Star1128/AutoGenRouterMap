export interface NativeTarget {
    artifacts?: Artifact[];
    backtrace?: number;
    backtraceGraph?: BacktraceGraph;
    compileGroups?: CompileGroup[];
    id: string;
    link?: Link;
    name: string;
    nameOnDisk?: string;
    paths?: Paths;
    sourceGroups?: SourceGroup[];
    sources?: Source[];
    type: string;
    directoryIndex?: number;
    jsonFile: string;
    projectIndex?: number;
}
export interface Artifact {
    path?: string;
}
export interface BacktraceGraph {
    commands?: string[];
    files?: string[];
    nodes?: Node[];
}
export interface Node {
    file?: number;
    command?: number;
    line?: number;
    parent?: number;
}
export interface CompileGroup {
    compileCommandFragments?: CompileCommandFragment[];
    defines?: Define[];
    includes?: Include[];
    language?: string;
    sourceIndexes?: number[];
    sysroot?: Artifact;
}
export interface CompileCommandFragment {
    fragment?: string;
}
export interface Define {
    define?: string;
}
export interface Include {
    backtrace?: number;
    path?: string;
}
export interface Link {
    commandFragments?: CommandFragment[];
    language?: string;
    sysroot?: Artifact;
}
export interface CommandFragment {
    fragment?: string;
    role?: string;
    backtrace?: number;
}
export interface Paths {
    build?: string;
    source?: string;
}
export interface SourceGroup {
    name?: string;
    sourceIndexes?: number[];
}
export interface Source {
    backtrace?: number;
    compileGroupIndex?: number;
    path?: string;
    sourceGroupIndex?: number;
}
