import { HvigorNativeConfig } from '../model/cxx/hvigor-native-build.js';
export declare const createInvalidationState: (lastFingerPrint: FileId, inputFiles: FileId[], requiredOutputFiles: FileId[], optionalOutputFiles: FileId[], hardOutputFiles: FileId[]) => Promise<InvalidationStateBuilder>;
export declare const readFingerPrintFile: (fingerPrint: string) => Promise<FileId[] | undefined>;
export declare const readCMakeFileApiReply: (dir: string, target: string, abi: string, cmakeTool: string) => HvigorNativeConfig;
export declare class InvalidationStateBuilder {
    private lastFingerPrint?;
    private inputFiles;
    private requiredOutputFiles;
    private optionalOutputFiles;
    private hardOutputFiles;
    private changesToFingerPrintFiles;
    private unchangedFingerPrintFiles;
    private configureType;
    private softConfigureReasons;
    private hardConfigureReasons;
    private fingerPrintFileExisted;
    static newBuilder(): InvalidationStateBuilder;
    updateFingerPrint(): Promise<void>;
    addAllChangesToFingerPrintFiles(changesToFingerPrintFiles: ChangeFile[]): this;
    addAllUnchangedFingerPrintFiles(unchangedFingerPrintFiles: ChangeFile[]): this;
    setConfigureType(configureType: ConfigureType): this;
    addAllSoftChanges(softConfigureReasons: ChangeFile[]): this;
    addAllHardChanges(hardConfigureReasons: ChangeFile[]): this;
    setFingerPrintFileExisted(existed: boolean): this;
    build(): this;
    setLastFingerPrint(fingerPrint: FileId): this;
    addInputFiles(inputFiles: FileId[]): this;
    getInputFile(): FileId[];
    addRequiredOutputFiles(inputFiles: FileId[]): this;
    getRequiredOutputFiles(): FileId[];
    addOptionalOutputFiles(inputFiles: FileId[]): this;
    getOptionalOutputFiles(): FileId[];
    addHardOutputFiles(inputFiles: FileId[]): this;
    getHardOutputFiles(): FileId[];
    shouldConfigureMessages(): string[];
    shouldConfigure(): boolean;
    softConfigureOkay(): boolean;
}
export declare class FileId implements FileFingerPrint {
    path: string;
    size: number;
    lastModified: number;
    exist: boolean;
    constructor(path: string, size?: number, lastModified?: number, exist?: boolean);
    static getInstance(path: string, size?: number, lastModified?: number, exist?: boolean): FileId;
    compareToCurrent(): ChangeFile;
    compareTo(file: FileId): ChangeFile;
    update(): this;
}
export declare class ChangeFile {
    path: string;
    type: FileChangeType;
    constructor(path: string, type: FileChangeType);
}
export declare enum ConfigureType {
    UNKNOWN_CONFIGURE_TYPE = 0,
    /**
     * No configure is needed.
     */
    NO_CONFIGURE = 1,
    /**
     * Okay to run C/C++ configure without first deleting the configure output folder.
     */
    SOFT_CONFIGURE = 2,
    /**
     * Configure also requires first deleting the configure output folder.
     */
    HARD_CONFIGURE = 3,
    UNRECOGNIZED = 4
}
export declare enum FileChangeType {
    /**
     * <code>UNKNOWN = 0;</code>
     */
    UNKNOWN = 0,
    /**
     * <code>CREATED = 1;</code>
     */
    CREATED = 1,
    /**
     * <code>DELETED = 2;</code>
     */
    DELETED = 2,
    /**
     * <code>LAST_MODIFIED_CHANGED = 3;</code>
     */
    LAST_MODIFIED_CHANGED = 3,
    /**
     * <code>LENGTH_CHANGED = 4;</code>
     */
    LENGTH_CHANGED = 4,
    UNCHANGED = -1
}
export interface ConfigureFingerPrint {
    files: FileFingerPrint[];
    version: number;
}
export interface FileFingerPrint {
    path: string;
    size: number;
    lastModified: number;
    exist: boolean;
}
