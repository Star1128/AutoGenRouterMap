import { ModuleTaskService } from '../tasks/service/module-task-service.js';
/**
 * 资源编译相关的工具类
 *
 * @since 2022/09/22
 */
export declare class CompileResourcesUtil {
    /**
     * 根据资源序号获得resource的编译中间目录名称
     *
     * @param {string} compileResourceType 编译资源类型
     * @param {number} seq 资源序号
     */
    static getCompileTargetFolderBySeq(compileResourceType: string, seq: number): string;
    /**
     *  Restool资源编译-m参数，模块名集合
     *  （提取公共方法，保留原有逻辑、拼接顺序）
     *
     * @param {ModuleTaskService} service
     * @param {targetName} targetName
     * @return {string[]} 模块名数组对象
     */
    static getRestoolModuleNames(service: ModuleTaskService, targetName: string): string[];
}
/**
 * 资源编译构造命令类别
 */
export declare enum CompileResourceBuildCommandType {
    FILE = "file",
    COMMAND = "command"
}
