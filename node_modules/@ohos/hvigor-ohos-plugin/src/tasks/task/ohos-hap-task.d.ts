import { TaskDetails } from '@ohos/hvigor';
import { CompileModeEnum } from '../../enum/compile-mode-enum.js';
import { TargetTaskService } from '../service/target-task-service.js';
import { OhosModuleTask } from './ohos-module-task.js';
/**
 * openHarmony基础hap 的task
 *
 * @since 2022/1/5
 */
export declare abstract class OhosHapTask extends OhosModuleTask {
    protected readonly targetCompileMode: CompileModeEnum;
    protected constructor(targetService: TargetTaskService, taskDetails: TaskDetails);
}
