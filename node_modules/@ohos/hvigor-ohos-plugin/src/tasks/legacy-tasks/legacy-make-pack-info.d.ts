import { LegacyModuleModelImpl } from '../../model/module/legacy-module-model-impl.js';
import { ConfigJson } from '../../options/configure/config-json-options.js';
import { ModuleTargetData } from '../data/hap-task-target-data.js';
import { TargetTaskService } from '../service/target-task-service.js';
import { FileSet } from '@ohos/hvigor';
import { AbstractMakePackInfo } from '../abstract-make-pack-info.js';
/**
 * 生成老模型hap级别的pack.info
 */
export declare class LegacyMakePackInfo extends AbstractMakePackInfo {
    private log;
    declareInputFiles(): FileSet;
    constructor(taskService: TargetTaskService);
    initTaskDepends(): void;
    protected doTaskAction(): void;
    getModuleObj(deviceTypes: string[], moduleModel: LegacyModuleModelImpl, apiVersion: ConfigJson.ApiVersionObj | undefined, targetName: string): object;
    protected getPackageObj(targetData: ModuleTargetData, configObj: ConfigJson.ConfigOptObj, noSuffixHapName: string, noSuffixLiteHapName?: string): object[];
}
