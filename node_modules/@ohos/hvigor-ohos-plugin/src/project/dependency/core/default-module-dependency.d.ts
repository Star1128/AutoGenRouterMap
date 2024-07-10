import { DefaultNpmDependency } from './default-npm-dependency.js';
import { DependencyBuilder } from './dependency-builder.js';
/**
 * module依赖的工程内的本地har模块
 *
 * @since 2022/5/7
 */
export declare class DefaultModuleDependency extends DefaultNpmDependency {
    private readonly _module;
    constructor(dependencyBuilder: DependencyBuilder);
    getModuleName(): string;
    getModule(): import("@ohos/hvigor").HvigorCoreNode;
}
