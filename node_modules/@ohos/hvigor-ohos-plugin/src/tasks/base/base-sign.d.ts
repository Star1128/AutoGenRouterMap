import { FileSet } from '@ohos/hvigor';
import { TaskDetails } from '@ohos/hvigor';
import { TaskInputValue } from '@ohos/hvigor';
import { SignTypeEnum } from '../../enum/sign-type-enum.js';
import { ProjectBuildProfile } from '../../options/build/project-build-profile.js';
import { TargetTaskService } from '../service/target-task-service.js';
import { SignUtil } from '../sign/sign-util.js';
import { OhosHapTask } from '../task/ohos-hap-task.js';
import SigningConfigBuildOpt = ProjectBuildProfile.SigningConfigBuildOpt;
import { OhosLogger } from '../../utils/log/ohos-logger.js';
/**
 * hap级别的签名基础类, 继承 OhosHapTask
 *
 * @since 2022/10/16
 */
export declare abstract class BaseSign extends OhosHapTask {
    readonly log: OhosLogger;
    protected readonly signingConfig: SigningConfigBuildOpt | undefined;
    protected readonly signUtil: SignUtil;
    protected readonly signType: SignTypeEnum;
    protected constructor(targetService: TargetTaskService, taskDetails: TaskDetails, signType?: SignTypeEnum);
    beforeAlwaysAction(): Promise<void>;
    declareInputs(): Map<string, TaskInputValue>;
    declareInputFiles(): FileSet;
    abstract initTaskDepends(): void;
    protected abstract doTaskAction(): void;
}
