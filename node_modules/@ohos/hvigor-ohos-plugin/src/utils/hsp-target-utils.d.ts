import { ModuleTargetData } from '../tasks/data/hap-task-target-data.js';
import { TargetTaskService } from '../tasks/service/target-task-service.js';
export declare class HspTargetUtils {
    private static _log;
    /**
     * 获取依赖的hsp模块的可用target
     *
     * @param targetService
     */
    static calDepHspTargets(targetService: TargetTaskService): Map<string, ModuleTargetData>;
}
