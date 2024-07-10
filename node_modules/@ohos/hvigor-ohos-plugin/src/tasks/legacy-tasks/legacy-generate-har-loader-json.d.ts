import { AbstractGenerateLoaderJson } from '../abstract-generate-loader-json.js';
import { TargetTaskService } from '../service/target-task-service.js';
/**
 * 生成fa模型编译需要的loader.json
 */
export declare class LegacyGenerateHarLoaderJson extends AbstractGenerateLoaderJson {
    private readonly aceLoaderJson;
    declareOutputFiles(): import("@ohos/hvigor").FileSet;
    initTaskDepends(): void;
    constructor(taskService: TargetTaskService);
    protected doTaskAction(): void;
}
