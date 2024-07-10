import { ExternalNativeOpt } from '../options/build/build-opt.js';
import { Dependency } from '../project/dependency/core/dependency-interface.js';
import { PackageResolver } from '../utils/native-cmake-resolver.js';
import { TargetTaskService } from './service/target-task-service.js';
import { OhosHapTask } from './task/ohos-hap-task.js';
/**
 * 根据已安装依赖中是否存在native产物（libs/include）
 * 为依赖生成cmake find脚本(exampleConfig.cmake)
 * 并将find脚本路径传递给cmake, 方便开发者引用三方so及接口
 *
 * @since 2024/01/02
 */
export declare class ConfigureCmake extends OhosHapTask {
    protected readonly nativeOption?: ExternalNativeOpt;
    protected readonly dependencies: Dependency[];
    protected readonly cmakeDir: string;
    protected readonly abiList: string[];
    protected readonly packages: PackageResolver[];
    constructor(targetService: TargetTaskService);
    taskShouldDo(): boolean;
    init(): void;
    protected doTaskAction(): Promise<void>;
    genCmakeFindFile(): Promise<void>;
    initTaskDepends(): void;
    private isLocal;
    private getModuleTarget;
    private isNativeLibrary;
}
