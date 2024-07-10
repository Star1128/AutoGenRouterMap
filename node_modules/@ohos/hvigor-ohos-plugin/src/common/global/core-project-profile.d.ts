import { ProjectBuildProfile } from '../../options/build/project-build-profile.js';
import ProjectProfileOpt = ProjectBuildProfile.ProjectProfileOpt;
import ProductBuildOpt = ProjectBuildProfile.ProductBuildOpt;
export declare class CoreProjectProfile {
    private profileOpt;
    private readonly projectPath;
    private static coreProjectProfile;
    private constructor();
    static getInstance(projectPath: string): CoreProjectProfile;
    private loadProfile;
    getProjectProfileOpt(): ProjectProfileOpt;
    getCurrentProductOpt(): ProductBuildOpt;
}
