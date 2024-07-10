import { FileSet } from '@ohos/hvigor';
import { TaskInputValue } from '@ohos/hvigor';
import { AbstractGenerateLoaderJson } from '../abstract-generate-loader-json.js';
import { TargetTaskService } from '../service/target-task-service.js';
/**
 * 生成fa模型编译需要的loader.json
 */
export declare class LegacyGenerateLoaderJson extends AbstractGenerateLoaderJson {
    private readonly outputAceLoaderJsonArray;
    private readonly multiResourceBuildArray;
    private readonly isWorkerArray;
    declareInputs(): Map<string, TaskInputValue>;
    declareOutputFiles(): FileSet;
    initTaskDepends(): void;
    constructor(taskService: TargetTaskService);
    private shouldLoaderWorker;
    protected doTaskAction(): void;
    private getMultiResourceBuild;
    /**
     * loader.json中的pages与manifest.json中的pages保持一致
     * loader.json: build/{default}/intermediates/loader/{default}/{MainAbility}/loader.json
     * manifest.json: build/{default}/intermediates/manifest/{default}/{MainAbility}/manifest.json
     *
     * @param targetData targetData
     * @param abilityInfo current page ability info
     * @private
     */
    private getManifestPage;
}
