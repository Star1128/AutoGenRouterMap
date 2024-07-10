import { ModuleTaskService } from '../../service/module-task-service.js';
import { TargetTaskService } from '../../service/target-task-service.js';
import { AbstractPreviewerRes } from './abstract-previewer-res.js';
/**
 * for previewer hook only
 *
 * @since 2022/8/11
 */
export declare class BuildHarPreviewerRes extends AbstractPreviewerRes {
    constructor(moduleService: ModuleTaskService, isFaMode: boolean);
    initTaskDepends(taskTargetService: TargetTaskService): void;
}
