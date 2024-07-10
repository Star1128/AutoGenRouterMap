import { ModuleModel } from '../../model/module/module-model.js';
import { ExternalNativeOpt } from '../../options/build/build-opt.js';
import { BuildOpt } from '../../options/build/build-opt.js';
export declare enum ArtifactType {
    ORIGINAL = "original",
    OBFUSCATION = "obfuscation",
    BYTECODE = "bytecode"
}
export declare class HarExtendInfo {
    private readonly moduleModel;
    readonly artifactType: string | undefined;
    readonly nativeOption?: ExternalNativeOpt;
    readonly buildOpt: BuildOpt;
    constructor(moduleModel: ModuleModel, buildOption: BuildOpt);
    hasConfiguredNativeOption(): boolean;
    isObfuscatedHar(): boolean;
    getArtifactType(): string;
}
