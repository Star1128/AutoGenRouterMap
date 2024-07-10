import { NewSigningOptions } from '../../../builder/inner-java-command-builder/new-signing-options.js';
import { ProjectModel } from '../../../model/project/project-model.js';
import { ProjectBuildProfile } from '../../../options/build/project-build-profile.js';
import { SdkInfo } from '../../../sdk/sdk-info.js';
import { CommonSignCommandBuilder } from './common-sign-command-builder.js';
import { SignModel } from './sign-model.js';
import SigningConfigBuildOpt = ProjectBuildProfile.SigningConfigBuildOpt;
import MaterialBuildOpt = ProjectBuildProfile.MaterialBuildOpt;
/**
 * Bin格式包的签名构造工具
 */
export declare class BinSignCommandBuilder extends CommonSignCommandBuilder {
    constructor(projectModel: ProjectModel, signingConfig: SigningConfigBuildOpt, sdkInfo: SdkInfo, signModel: SignModel, signingOptions: NewSigningOptions);
    getSignTool(): string;
    initCommandParams(material: MaterialBuildOpt): void;
}
