import { FileSet } from '@ohos/hvigor';
import { OhosLogger } from '../utils/log/ohos-logger.js';
import { ArkCompile } from './ark-compile.js';
export declare class ColdReloadArkCompile extends ArkCompile {
    logger: OhosLogger;
    taskShouldDo(): boolean;
    declareInputFiles(): FileSet;
    protected doTaskAction(): Promise<void>;
    initTaskDepends(): void;
}
