import { TargetTaskService } from '../service/target-task-service.js';
import { OhosHapTask } from '../task/ohos-hap-task.js';
/**
 * UnitTestBuild场景处理构建中间产物module.json文件
 * 1.增加TestAbility入口
 *
 * @since 2023/9/11
 */
export declare class UnitTestProcessProfile extends OhosHapTask {
    private readonly processProfileModuleJsonPath;
    constructor(taskService: TargetTaskService);
    initTaskDepends(): void;
    protected doTaskAction(): void;
}
