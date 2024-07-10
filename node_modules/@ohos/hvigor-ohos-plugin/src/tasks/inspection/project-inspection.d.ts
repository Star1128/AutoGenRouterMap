import { ProjectModel } from '../../model/project/project-model.js';
import { InspectionI } from './inspection-i.js';
export declare class ProjectInspection implements InspectionI {
    private _log;
    private readonly projectModel;
    constructor(projectModel: ProjectModel);
    doInspection(): InspectionI;
    projectPathInspection(): void;
    exitOnError(): void;
}
