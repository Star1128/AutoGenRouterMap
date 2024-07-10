import { FileSet } from '@ohos/hvigor';
import { TargetTaskService } from './service/target-task-service.js';
import { SignRemoteHsp } from './sign-remote-hsp.js';
export declare class SignProjectRemoteHsp extends SignRemoteHsp {
    constructor(targetService: TargetTaskService);
    taskShouldDo(): boolean;
    /**
     * 由于多模块都需要依赖工程级remote_hsp签名方法，所以使用promise让所以模块级的remote_hsp等待该任务执行结束
     * 如果promise = projectUnsigned说明不存在工程级remote_hsp签名任务，新建一个promise对象使所有模块级签名任务等待其执行
     * @protected
     */
    protected doTaskAction(): Promise<void>;
    private doSignAction;
    declareInputFiles(): FileSet;
    declareOutputFiles(): FileSet;
    initTaskDepends(): void;
}
