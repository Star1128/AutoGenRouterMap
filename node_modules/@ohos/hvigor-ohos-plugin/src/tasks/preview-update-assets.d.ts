import { FileSet, TaskInputValue } from '@ohos/hvigor';
import { OhosLogger } from '../utils/log/ohos-logger.js';
import { TargetTaskService } from './service/target-task-service.js';
import { OhosHapTask } from './task/ohos-hap-task.js';
/**
 * 预览模式下，Stage模型在编译预览代码前更新前置任务生成的module.json和main_pages.json文件
 *
 * @since 2023/2/13
 */
export declare class PreviewUpdateAssets extends OhosHapTask {
    logger: OhosLogger;
    private readonly buildConfigPath;
    private paths;
    private contents;
    constructor(taskService: TargetTaskService);
    declareInputs(): Map<string, TaskInputValue>;
    declareOutputFiles(): FileSet;
    protected doTaskAction(): void;
    /**
     * 解析预览传入的页面路由配置
     *
     * @param routerConfigPaths .preview/config/buildConfig.json/stageRouterConfig.paths
     * @param routerConfigContents .preview/config/buildConfig.json/stageRouterConfig.contents
     * @param pagesFileName pagesFileName
     * @private
     */
    private resolveRouterConfig;
    /**
     * 更新前置任务生成的module.json文件
     *
     * @param filePath 文件路径
     * @param fileContent 文件内容
     * @protected
     */
    private writeModuleJson;
    /**
     * 更新前置任务生成的main_pages.json文件
     *
     * @param filePath 文件路径
     * @param fileContent 文件内容
     * @protected
     */
    private writeMainPages;
    initTaskDepends(): void;
}
