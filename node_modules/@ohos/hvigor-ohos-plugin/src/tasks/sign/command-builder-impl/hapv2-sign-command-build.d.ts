import { SigningOptions } from '../../../builder/inner-java-command-builder/signing-options';
import { ProjectModel } from '../../../model/project/project-model';
import { ProjectBuildProfile } from '../../../options/build/project-build-profile';
import { SdkInfo } from '../../../sdk/sdk-info';
import { CommonSignCommandBuilder } from './common-sign-command-builder';
import { SignModel } from './sign-model';
import SigningConfigBuildOpt = ProjectBuildProfile.SigningConfigBuildOpt;
import MaterialBuildOpt = ProjectBuildProfile.MaterialBuildOpt;
/**
 * sdk 老签名工具hapsigntoolv2的命令行生成器
 *
 * @since 2022/03/01
 */
export declare class HapV2SignCommandBuild extends CommonSignCommandBuilder {
    private static SIGN_MODE;
    constructor(projectModel: ProjectModel, signingConfig: SigningConfigBuildOpt, sdkInfo: SdkInfo, signModel: SignModel, signingOptions: SigningOptions);
    getSignTool(): string;
    /**
     * 获取build-profile中的签名配置,加载到signOptions中
     */
    initCommandParams(material: MaterialBuildOpt): void;
}
