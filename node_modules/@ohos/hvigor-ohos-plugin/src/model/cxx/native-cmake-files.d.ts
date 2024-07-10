export interface NativeCMakeFiles {
    kind: string;
    version: {
        major: number;
        minor: number;
    };
    paths: CMakeFilesPaths;
    inputs: InputFile[];
}
export interface CMakeFilesPaths {
    build: string;
    source: string;
}
export interface InputFile {
    path: string;
    isGenerated?: boolean;
    isExternal?: boolean;
    isCMake?: boolean;
}
