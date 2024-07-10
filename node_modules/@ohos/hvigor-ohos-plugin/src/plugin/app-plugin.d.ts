import { Project } from '@ohos/hvigor';
import { AbstractProjectPlugin } from './common/abstract-project-plugin.js';
/**
 * 对外暴露app级别的接口和任务的plugin
 *
 * @since 2021/12/16
 */
export declare class AppPlugin extends AbstractProjectPlugin {
    constructor(project: Project);
    initTaskService(): void;
}
