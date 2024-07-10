import { ProjectModel } from '../../../model/project/project-model.js';
import { ProjectBuildProfile } from '../../../options/build/project-build-profile.js';
import { SdkInfo } from '../../../sdk/sdk-info.js';
import { CommonSignCommandBuilder } from './common-sign-command-builder.js';
import { SignModel } from './sign-model.js';
/**
 * 根据工程api 状态创建不同的签名配置
 *
 * @since 2022/03/01
 */
export declare class SignCommandFactory {
    private readonly _compileSdkVersion;
    constructor(compileSdkVersion: number);
    createCommandBuilder(projectModel: ProjectModel, signingConfig: ProjectBuildProfile.SigningConfigBuildOpt, sdkInfo: SdkInfo, signModel: SignModel): CommonSignCommandBuilder;
}
