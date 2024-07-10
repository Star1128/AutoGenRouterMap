import { ModuleModel } from '../../../model/module/module-model.js';
import { ModuleBuildProfile } from '../../../options/build/module-build-profile.js';
/**
 * HarmonyOS api 9 暂时不支持原子化服务和卡片
 * 1.compileSdkVersion 为 9
 * 2.以target为维度进行校验,target配置了runtimeOs为HarmonyOs
 * 3.installFree配置为true
 *
 * @param {ModuleModel} moduleModel
 * @param {ModuleBuildProfile.ModuleTargetBuildOpt} target
 * @param {boolean} isHarmonyOsTarget
 */
export declare function validateHosApi9AtomicService(moduleModel: ModuleModel, target: ModuleBuildProfile.ModuleTargetBuildOpt, isHarmonyOsTarget: boolean): void;
