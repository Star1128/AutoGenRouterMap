import { FileSet, TaskInputValue } from '@ohos/hvigor';
import { TargetTaskService } from '../service/target-task-service.js';
import { SignTypeEnum } from '../../enum/sign-type-enum';
import { SignUtil } from '../sign/sign-util';
import { OhosHapTask } from '../task/ohos-hap-task';
/**
 * 老模型的打包Hap包任务
 *
 * @since 2022/1/10
 */
export declare class LegacyPackageHap extends OhosHapTask {
    private _log;
    private readonly needPackBin;
    private readonly unSignBinPath;
    private readonly signBinPath;
    private readonly binOutPath;
    private readonly libPath;
    private readonly rpcidSc;
    private readonly apkPath;
    private readonly allPackHapPathsObj;
    private readonly arkCodeModel;
    private readonly jsCodeModel;
    protected readonly signUtil: SignUtil;
    protected readonly signType: SignTypeEnum;
    declareExecutionTool(): string;
    declareExecutionCommand(): string;
    declareInputs(): Map<string, TaskInputValue>;
    declareInputFiles(): FileSet;
    declareOutputFiles(): FileSet;
    constructor(taskService: TargetTaskService);
    protected initTaskDependsForOtherModule(): void;
    private pushEntryInfo;
    initTaskDepends(): void;
    protected doTaskAction(): Promise<void>;
    private buildHapBuilder;
    private buildHapPackageOptions;
    private buildHapBinBuilder;
    /**
     * 获得打包hap的命令
     *
     * @param packHapPathsObj 构建HAP包需要的路径
     * @returns {string[]} 生成的命令
     */
    private getHapCommand;
    /**
     * 获得打包hap bin的命令
     *
     * @returns {string[]} 生成的命令
     */
    private getHapBinCommand;
    /**
     * 执行命令
     *
     * @param command 需要执行的命令
     */
    private executeCommandList;
    /**
     * feature关联多entry场景对deviceType进行校验处理
     *
     * @param entryName feature关联的entry模块的moduleName
     * @param targetData moduleTargetData
     * @private
     */
    private validateRelatedModule;
}
