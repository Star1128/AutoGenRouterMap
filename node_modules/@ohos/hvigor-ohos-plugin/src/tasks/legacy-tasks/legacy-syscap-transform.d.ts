import { AbstractSyscapTransform } from '../abstract/abstract-syscap-transform.js';
import { TargetTaskService } from '../service/target-task-service.js';
import { JsonProfile } from '../../model/json-profile.js';
/**
 * Legacy Syscap Transform Task
 *
 * @since 2022/09/8
 */
export declare class LegacySyscapTransform extends AbstractSyscapTransform {
    private readonly jsonFilePath;
    constructor(taskService: TargetTaskService);
    protected getJsonProfileByModel(): JsonProfile;
}
