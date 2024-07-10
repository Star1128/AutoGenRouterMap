import { FileSet, TaskDetails, TaskInputValue } from '@ohos/hvigor';
import { TargetTaskService } from '../service/target-task-service.js';
import { AbstractProcessResource } from './abstract-process-resource.js';
/**
 * 编译前的资源处理和生成Restool增量方式编译、链接命令参数的公共抽象类
 *
 * @since 2022/09/22
 */
export declare abstract class AbstractProcessResourceIncrement extends AbstractProcessResource {
    protected restCommandContent: string | undefined;
    protected constructor(taskService: TargetTaskService, taskDetails: TaskDetails);
    protected doTaskAction(): void;
    declareInputs(): Map<string, TaskInputValue>;
    declareInputFiles(): FileSet;
    declareOutputFiles(): FileSet;
}
