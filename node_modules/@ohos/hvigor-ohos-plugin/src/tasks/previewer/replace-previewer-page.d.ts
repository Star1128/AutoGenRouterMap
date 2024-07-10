import { OhosLogger } from '../../utils/log/ohos-logger.js';
import { TargetTaskService } from '../service/target-task-service.js';
import { OhosHapTask } from '../task/ohos-hap-task.js';
/**
 * accept previewer args then replace into page file
 */
export declare class ReplacePreviewerPage extends OhosHapTask {
    private _log;
    constructor(taskService: TargetTaskService);
    initTaskDepends(): void;
    protected doTaskAction(): void;
    /**
     * Preview stage模型资源编译之后处理profile路由配置
     *
     * @param {OhosLogger} log
     * @private
     */
    protected processPreviewProfile(log: OhosLogger): void;
    /**
     * Preview 处理非路由预览，替换profile路由文件内容
     * @param {OhosLogger} log
     * @return {boolean} true 表示处理完成， false 未处理
     * @private
     */
    private replacePreviewPage;
    /**
     * 在资源中间产物module.json文件中添加main_pages.json文件引用 保证hsp模块module.json中始终存在main_pages.json文件引用
     * @private
     */
    private appendMainPages;
}
