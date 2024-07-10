import { ApiType } from '../../project/data/hap-extra-info.js';
import { Configurable, Named, RequiredNamed } from '../options';
import { BuildOpt, BuildOptionWithName } from './build-opt.js';
/**
 * 模块级别的build-profile.json5的pattern
 * 所有需要配到project.json5的数据通过对应接口提供，
 * 若该接口中未定义，则认为是开发者手动加了不支持的字段(开发态无法联想)
 *
 * 命名规范:
 *   1. 每一个子标签都以xxxBuildOpt结尾
 *   2. 如果project跟Module有相同命名的字段，加一个project/module的前缀区分
 */
export declare namespace ModuleBuildProfile {
    interface ConfigOpt {
        buildOption?: BuildOpt;
        deviceType?: string[];
        distroFilter?: DistroFilterBuildOpt;
        distributionFilter?: DistroFilterBuildOpt;
        atomicService?: AtomicServiceObj;
    }
    interface AtomicServiceObj {
        preloads: {
            moduleName: string;
        };
    }
    interface DistroFilterBuildOpt {
        apiVersion?: ApiVersionOpt;
        screenShape?: ScreenShapeOpt;
        screenWindow?: ScreenWindowOpt;
        screenDensity?: object;
        countryCode?: object;
    }
    interface ApiVersionOpt {
        policy: string;
        value: number[];
    }
    interface ScreenShapeOpt {
        policy: string;
        value: string[];
    }
    interface ScreenWindowOpt {
        policy: string;
        value: string[];
    }
    interface AbilityBuildOpt extends Named {
        pages?: string[];
        res?: string[];
        icon?: string;
        label?: string;
        launchType?: string;
    }
    interface SourcesOpt {
        abilities?: AbilityBuildOpt[];
        pages?: string[];
        sourceRoots?: string[];
    }
    interface ModuleTargetBuildOpt extends RequiredNamed, Configurable {
        source?: SourcesOpt;
        resource?: ResourceBuildOpt;
        config?: ConfigOpt;
        buildOption?: BuildOpt;
        output?: OutputOpt;
    }
    interface ResourceBuildOpt {
        directories?: string[];
    }
    interface ModuleBuildOpt extends Configurable {
        apiType?: ApiType;
        buildOption?: BuildOptionWithName;
        buildOptionSet?: BuildOptionWithName[];
        buildModeBinder?: BuildModeBinder[];
        targets?: ModuleTargetBuildOpt[];
        entryModules?: string[];
    }
    interface BuildModeBinderMapping extends Record<string, unknown> {
        targetName: string;
        buildOptionName: string;
    }
    interface BuildModeBinder extends Record<string, unknown> {
        buildModeName: string;
        mappings?: BuildModeBinderMapping[];
    }
}
export interface TargetRuntimeOS {
    moduleName: string;
    targetName: string;
    productName: string;
    runtimeOS?: string;
}
/**
 * target定制产物输出配置
 */
export interface OutputOpt {
    artifactName: string;
}
