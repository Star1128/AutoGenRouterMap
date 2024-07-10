import { DefaultSyncTask, Project } from '@ohos/hvigor';
/**
 * Project级别的Sync任务
 *
 * @since 2022/2/19
 */
export declare class SyncProject extends DefaultSyncTask {
    constructor(project: Project, taskName: string);
    registryAction: () => Function;
}
