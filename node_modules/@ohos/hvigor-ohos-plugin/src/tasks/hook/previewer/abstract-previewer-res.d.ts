import { ModuleTaskService } from '../../service/module-task-service.js';
import { AbstractModuleHookTask } from '../abstract-module-hook-task.js';
export declare abstract class AbstractPreviewerRes extends AbstractModuleHookTask {
    protected syscapJsonPath: string;
    protected constructor(moduleService: ModuleTaskService, isFaMode: boolean);
}
