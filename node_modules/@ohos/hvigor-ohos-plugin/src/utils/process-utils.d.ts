/// <reference types="node" />
/// <reference types="node" />
import { CoreTask, DurationEvent } from '@ohos/hvigor';
import { WorkerPoolDelegator } from '@ohos/hvigor';
import { SpawnOptionsWithoutStdio, SpawnSyncOptions, SpawnSyncReturns } from 'child_process';
import { BooleanCallback } from '../common/type/callback-type.js';
import { LogCombineType } from './log/log-combine-type';
/**
 * 执行命令的工具类
 *
 * @since 2021-12-14
 */
export declare class ProcessUtils {
    private _log;
    private readonly _moduleName;
    private readonly _taskName;
    private readonly _errLog;
    private readonly _ohosCharset;
    private readonly _solution;
    private readonly _defaultOptions;
    constructor(moduleName?: string, taskName?: string, logLevel?: string, errLog?: string, solution?: string, charset?: string);
    /**
     * 向工作池提交同步执行的命令，执行命令无返回值
     *
     * @param task
     * @param workerPool 工作池代理器
     * @param inputData 输入数据
     * @param callback 回调函数
     * @param callbackInput 回调函数的输入数据
     * @param subDurationEvent 子持续事件
     * @param targetWorkers 目标worker的集合
     * @param combine
     */
    submitExecutionWithoutReturn(task: CoreTask, workerPool: WorkerPoolDelegator, inputData: any, callback: Function, callbackInput: unknown[], subDurationEvent: DurationEvent, targetWorkers?: number[], combine?: LogCombineType): Promise<void>;
    /**
     * 向工作池提交同步执行的命令，执行命令有返回值，作为callback的输入
     *
     * @param task
     * @param workerPool 工作池代理器
     * @param funcPath 执行函数的路径
     * @param inputData 输入数据
     * @param callback 回调函数
     * @param targetWorkers 目标worker的集合
     * @returns {boolean} 是否成功提交
     */
    submitSyncExecutionWithReturn(task: CoreTask, workerPool: WorkerPoolDelegator, funcPath: string, inputData: any, callback: Function, targetWorkers?: number[]): boolean;
    execute(command: string[], options?: SpawnSyncOptions, combine?: LogCombineType, specialLogCallBack?: BooleanCallback): Promise<{
        stdout: string;
        stderr: string;
    }>;
    /**
     * 同步地执行命令，并打印结果。同步的执行方式必然需要等到执行结束
     *
     * @param command 命令
     * @param options - 传入参数
     * @param combine
     */
    executeSync(command: string[], options?: SpawnSyncOptions, combine?: LogCombineType): SpawnSyncReturns<string | Buffer>;
    private handleOutput;
    private handleException;
    /**
     * 同步地执行命令，并打印结果。
     *
     * @param {string} command 命令
     * @param {SpawnSyncOptions} options - 传入参数
     * @return {SpawnSyncReturns<string | Buffer>} 返回信息
     */
    execaCommandSync(command: string, options?: SpawnSyncOptions): SpawnSyncReturns<string | Buffer>;
    /**
     * 异步执行命令，并打印结果。
     *
     * @param {string} command 命令
     * @param {SpawnOptionsWithoutStdio} options - 传入参数
     * @return {Promise<void>} 返回信息
     */
    execaCommand(command: string, options?: SpawnOptionsWithoutStdio): Promise<void>;
    /**
     * 打印execa执行命令后的返回结果
     *
     * @param {ExecaReturnValue, ExecaSyncReturnValue}result 日志结果对象
     */
    printExecaResultLog(result: SpawnSyncReturns<string | Buffer> | {
        stdout: string | Buffer;
        stderr: string | Buffer;
        status?: number;
    }): void;
    /**
     * 根据process状态判断该报错是否需要打印到输出流中
     *
     * @returns {boolean}
     * @private
     */
    private needPrintWarnWhenNoReturnValue;
    /**
     * 生成execa需要的options入参
     *
     * @param options - 传入参数
     */
    processOptionsFactory(options: SpawnSyncOptions | undefined | SpawnOptionsWithoutStdio): SpawnSyncOptions;
    private validateExecuteFile;
    private makeError;
    /**
     * native编译特殊日志处理
     *
     * @param {string} studio 执行命令返回结果
     * @param {LogCombineType} combine 日志级别
     * @private
     */
    private nativeNoReturnValueWarningHandler;
}
