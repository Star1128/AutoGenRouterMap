import { TaskDetails } from '@ohos/hvigor';
import { ModuleType } from '../../enum/module-type-enum.js';
import { TargetTaskService } from '../service/target-task-service.js';
export declare const computeTaskDetailsWithTarget: (details: TaskDetails, service: TargetTaskService) => TaskDetails;
export declare const computeDepends: (depends: string[], service: TargetTaskService) => string[];
export declare const deviceTestComputeDepends: (depends: string[], depTask: string, service: TargetTaskService, moduleType: ModuleType) => void;
export declare const computeHookTaskDepends: (depends: string[], targets: TargetTaskService[]) => string[];
