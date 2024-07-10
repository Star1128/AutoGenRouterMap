import { CoreTask, DurationEvent } from '@ohos/hvigor';
import { WorkerPoolDelegator } from '@ohos/hvigor';
import { ProjectConfig } from '@ohos/hvigor-arkts-compose';
import { OhosLogger } from '../../utils/log/ohos-logger.js';
/**
 * 向线程池提交执行编译ArkTS的任务
 *
 * @param task task
 * @param workerPool 线程池
 * @param logger 日志
 * @param config 编译参数
 * @param callback 编译后的回调函数，其入参是work的返回值
 * @param targetWorkers 目标worker
 */
export declare function submitArkCompileWork(task: CoreTask, workerPool: WorkerPoolDelegator, logger: OhosLogger, config: ProjectConfig, callback: Function, targetWorkers?: number[]): Promise<string | null>;
export declare function submitArkLintWork(task: CoreTask, workerPool: WorkerPoolDelegator, logger: OhosLogger, config: ProjectConfig, entry: Record<string, unknown>, subDurationEvent: DurationEvent): Promise<void>;
