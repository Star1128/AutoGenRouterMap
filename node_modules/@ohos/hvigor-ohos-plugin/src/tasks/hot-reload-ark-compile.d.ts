import { OhosLogger } from '../utils/log/ohos-logger.js';
import { ArkCompile } from './ark-compile.js';
export declare class HotReloadArkCompile extends ArkCompile {
    logger: OhosLogger;
    protected doTaskAction(): Promise<void>;
    initTaskDepends(): void;
}
