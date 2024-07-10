import { Progress } from '@ohos/sdkmanager-common';
export declare class DefaultProgress implements Progress {
    debug(log: string): void;
    error(log: string): void;
    fatal(log: string): void;
    info(log: string): void;
    warn(log: string): void;
}
