import { Project, TaskInputValue } from '@ohos/hvigor';
import { FileSet } from '@ohos/hvigor';
import { ProjectTaskService } from './service/project-task-service.js';
import { OhosAppTask } from './task/ohos-app-task.js';
/**
 * 生成Fa模型和Stage模型app级别的pack.info
 */
export declare class MakeProjectPackInfo extends OhosAppTask {
    private moduleSet;
    private readonly hapPackInfoPathMap;
    private readonly allRemoteHspPathMap;
    private readonly remoteHspModuleSet;
    declareInputs(): Map<string, TaskInputValue>;
    declareInputFiles(): FileSet;
    declareOutputFiles(): FileSet;
    private _projectPackInfoObj;
    initTaskDepends(): void;
    /**
     * 判断moduleModel对应的node模块是否存在一个Target需要打包到当前指定的product的app中
     * 判断的依据是在根项目的build-profile.json5中
     * 1.显示的配置了对应的target
     * 2.target的applyToProducts字段中包含了指定的product,默认如果没有配置applyToProducts则默认为applyTo default
     *
     * @param {ModuleModel} moduleModel
     * @returns {boolean}
     * @private
     */
    private isNeedPackageHap;
    constructor(project: Project, taskService: ProjectTaskService);
    beforeAlwaysAction(): Promise<void>;
    protected doTaskAction(): Promise<void>;
    /**
     * 合并该product包含的模块对应的hap的packInfo信息
     *
     * @param hapPackInfoPath hap的packInfo路径
     * @param moduleName 需要合并的模块名
     */
    private mergeHapPackInfo;
    /**
     * 合并该product包含的模块对应的remoteHsp的packInfo信息
     *
     * @param hspPackInfo remoteHsp的packInfo信息
     * @param moduleName 需要合并的模块名
     * @param hspFileName  远程hsp的文件名
     */
    private mergeRemoteHspPackInfo;
    private removeHspExtension;
}
