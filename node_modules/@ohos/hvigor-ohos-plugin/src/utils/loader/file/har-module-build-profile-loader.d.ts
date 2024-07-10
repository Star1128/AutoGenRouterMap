import { ModuleBuildProfile } from '../../../options/build/module-build-profile.js';
import { AbstractBuildProfileLoader } from './abstract-build-profile-loader.js';
declare class HarModuleBuildProfileLoader extends AbstractBuildProfileLoader {
    getBuildProfile(nodeName: string): ModuleBuildProfile.ModuleBuildOpt;
    setBuildProfileJson5Obj(hvigorNodeName: string, buildProfileJson5Obj: ModuleBuildProfile.ModuleBuildOpt, schemaCheck?: boolean): void;
}
export declare const harModuleBuildProfileLoader: HarModuleBuildProfileLoader;
export {};
