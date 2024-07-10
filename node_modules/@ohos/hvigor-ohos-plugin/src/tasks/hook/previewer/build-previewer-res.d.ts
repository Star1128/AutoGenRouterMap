import { ModuleTaskService } from '../../service/module-task-service.js';
import { TargetTaskService } from '../../service/target-task-service.js';
import { AbstractPreviewerRes } from './abstract-previewer-res.js';
/**
 * for previewer hook only in hap module
 *
 * @2022/8/11
 */
export declare class BuildPreviewerRes extends AbstractPreviewerRes {
    constructor(moduleTaskService: ModuleTaskService, isFaMode: boolean);
    initTaskDepends(taskTargetService: TargetTaskService): void;
}
