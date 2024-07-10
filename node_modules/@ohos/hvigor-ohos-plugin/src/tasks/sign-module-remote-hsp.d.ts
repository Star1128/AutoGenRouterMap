import { FileSet } from '@ohos/hvigor';
import { TargetTaskService } from './service/target-task-service.js';
import { SignRemoteHsp } from './sign-remote-hsp.js';
export declare class SignModuleRemoteHsp extends SignRemoteHsp {
    constructor(targetService: TargetTaskService);
    taskShouldDo(): boolean;
    /**
     * 判断全局变量promise的值执行不同操作
     * projectUnsigned说明工程级remote_hsp文件不存在或SignProjectRemoteHsp增量未执行，直接执行模块级remote_hsp签名
     * typeof promise为function说明工程级remote_hsp正在签名，所以模块级等待签名结束
     * projectSignSuccesses说明工程级remote_hsp签名成功，直接执行模块级remote_hsp签名
     * @protected
     */
    protected doTaskAction(): Promise<void>;
    private moduleSignAction;
    declareInputFiles(): FileSet;
    declareOutputFiles(): FileSet;
    initTaskDepends(): void;
}
