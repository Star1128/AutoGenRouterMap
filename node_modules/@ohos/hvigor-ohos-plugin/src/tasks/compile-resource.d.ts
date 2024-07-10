import { FileSet } from '@ohos/hvigor';
import { AbstractCompileResource } from './abstract/abstract-compile-resource.js';
import { ModuleTargetData } from './data/hap-task-target-data.js';
import { TargetTaskService } from './service/target-task-service.js';
/**
 * 编译资源
 *
 * @since 2022/1/10
 */
export declare class CompileResource extends AbstractCompileResource {
    protected processProfileTask: string;
    private _log;
    declareInputFiles(): FileSet;
    declareExecutionCommand(): string;
    constructor(targetTaskService: TargetTaskService);
    initTaskDepends(): void;
    protected doTaskAction(): Promise<void>;
    invokeRestool(targetData: ModuleTargetData): Promise<void>;
    /**
     * 处理stage模型target定制distroFilter场景
     * target中定制distroFilter配置写入metadata->{resource文件}下
     * @protected
     */
    protected customizeDistroFilter(): void;
    /**
     * 将中间产物资源目录下的routerMap配置修改为合并后的routerMap配置
     * @param routerMapObjList
     * @private
     */
    private writeRouterMap;
    private processRouterMap;
}
