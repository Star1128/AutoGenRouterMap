import { TaskDetails } from '@ohos/hvigor';
import { BuildNativeWithCmake } from '../build-native-with-cmake.js';
import { BuildNativeWithNinja } from '../build-native-with-ninja.js';
import { CacheNativeLibs } from '../cache-native-libs.js';
import { ConfigureCmake } from '../configure-cmake.js';
import { DoNativeStrip } from '../do-native-strip.js';
import { PrepareQuickfix } from '../prepare-quickfix.js';
import { ProcessLibs } from '../process-libs.js';
import { TargetTaskService } from '../service/target-task-service.js';
import { TargetTaskCreator, TaskCreatorManager } from '../task-creator.js';
export declare const initNativeTasks: (creatorManager: TaskCreatorManager, service: TargetTaskService, isFa?: boolean) => void;
export declare class CmakeCA extends TargetTaskCreator {
    declareDepends: () => string[];
    declareTaskDetail: () => TaskDetails;
    provider: () => BuildNativeWithCmake;
}
export declare class NinjaCA extends TargetTaskCreator {
    provider: () => BuildNativeWithNinja;
    declareDepends: () => string[];
    declareTaskDetail: () => TaskDetails;
}
export declare class ProcessLibsCA extends TargetTaskCreator {
    declareDepends: () => string[];
    declareTaskDetail: () => TaskDetails;
    provider: () => ProcessLibs;
}
export declare class PrepareQuickfixCA extends TargetTaskCreator {
    declareDepends: () => string[];
    declareTaskDetail: () => TaskDetails;
    provider: () => PrepareQuickfix;
}
export declare class DoNativeStripCA extends TargetTaskCreator {
    declareDepends: () => string[];
    declareTaskDetail: () => TaskDetails;
    provider: () => DoNativeStrip;
}
export declare class CacheNativeLibsCA extends TargetTaskCreator {
    declareDepends: () => string[];
    declareTaskDetail: () => TaskDetails;
    provider: () => CacheNativeLibs;
}
export declare class CmakeConfigureCA extends TargetTaskCreator {
    declareDepends: () => string[];
    declareTaskDetail: () => TaskDetails;
    provider: () => ConfigureCmake;
}
