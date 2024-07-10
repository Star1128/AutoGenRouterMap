import { TargetTaskService } from './service/target-task-service.js';
import { JsonProfile } from '../model/json-profile.js';
import { AbstractSyscapTransform } from './abstract/abstract-syscap-transform.js';
/**
 * Syscap Transform Task
 *
 * @since 2022/02/22
 */
export declare class SyscapTransform extends AbstractSyscapTransform {
    private readonly jsonFilePath;
    constructor(taskService: TargetTaskService);
    protected getJsonProfileByModel(): JsonProfile;
}
