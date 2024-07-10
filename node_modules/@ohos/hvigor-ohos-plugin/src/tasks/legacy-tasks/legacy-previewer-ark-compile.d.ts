import { FileSet } from '@ohos/hvigor';
import { OhosLogger } from '../../utils/log/ohos-logger.js';
import { LegacyCompileNode } from './legacy-compile-node.js';
export declare class LegacyPreviewerArkCompile extends LegacyCompileNode {
    logger: OhosLogger;
    declareInputFiles(): FileSet;
    protected doTaskAction(): Promise<void>;
    initTaskDepends(): void;
}
