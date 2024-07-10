import { FileSet, TaskDetails } from '@ohos/hvigor';
import { NodeCommandBuilder } from '../../builder/node-command-builder.js';
import { CodeType } from '../../enum/code-type-enum.js';
import { CompileNode } from '../compile-node.js';
import { TargetTaskService } from '../service/target-task-service.js';
export declare enum ObfuscateType {
    UGLIFY = "uglify"
}
/**
 * Har编译arkTs相关源码
 */
export declare class HarCompileNode extends CompileNode {
    constructor(taskService: TargetTaskService, codeType: CodeType, taskDetails: TaskDetails);
    declareInputFiles(): FileSet;
    protected doTaskAction(): Promise<void>;
    protected createNodeCommandBuilder(): NodeCommandBuilder;
}
