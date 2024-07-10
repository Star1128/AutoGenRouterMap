import { NewSigningOptions } from '../../../builder/inner-java-command-builder/new-signing-options.js';
import { ProjectModel } from '../../../model/project/project-model.js';
import { ProjectBuildProfile } from '../../../options/build/project-build-profile.js';
import { SdkInfo } from '../../../sdk/sdk-info.js';
import { CommonSignCommandBuilder } from './common-sign-command-builder.js';
import { SignModel } from './sign-model.js';
import SigningConfigBuildOpt = ProjectBuildProfile.SigningConfigBuildOpt;
import MaterialBuildOpt = ProjectBuildProfile.MaterialBuildOpt;
/**
 * sdk 新签名工具hap-sign-tool的命令行生成器
 *
 * @since 2022/03/01
 */
export declare class HapSignCommandBuilder extends CommonSignCommandBuilder {
    private static SIGN_MODE;
    constructor(projectModel: ProjectModel, signingConfig: SigningConfigBuildOpt, sdkInfo: SdkInfo, signModel: SignModel, signingOptions: NewSigningOptions);
    getSignTool(): string;
    /**
     * 获取build-profile中的签名配置,加载到signOptions中
     */
    initCommandParams(material: MaterialBuildOpt): void;
}
