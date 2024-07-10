import { ProjectBuildProfile } from '../options/build/project-build-profile.js';
import { ModuleModel } from './module/module-model.js';
import ApiMeta = ProjectBuildProfile.ApiMeta;
import ProductApiMeta = ProjectBuildProfile.ProductApiMeta;
/**
 * Plugin插件中的通用基础模型定义
 *
 * @since 2022/2/23
 */
export interface Model {
    /**
     * module/project的名称
     */
    getName: () => string;
    /**
     * 获取构建文件build-profile.json5的配置文件的路径
     */
    getProfilePath: () => string;
    /**
     * 构建文件名称,当前一般为build-profile.json5
     */
    getBuildProfileName: () => string;
    /**
     * module/project的根目录
     */
    getProjectDir: () => string;
    /**
     * module/project的远程hsp目录
     */
    getRemoteHspPath: () => string;
    /**
     * package.json的路径
     */
    getPackageJsonPath: () => string;
    /**
     * oh-package.json5的路径
     */
    getOhPackageJson5Path: () => string;
    /**
     * 判断是否是ohpm工程
     */
    isOhpmProject: () => boolean;
    /**
     * 获取编译使用的api版本号
     */
    getCompileApiMetaByProduct: (product: string) => ApiMeta;
    /**
     * 获取编译使用的兼容api版本号
     */
    getCompatibleApiMetaByProduct: (product: string) => ApiMeta;
    /**
     * 获取编译使用的兼容api版本号
     */
    getTargetApiMetaByProduct: (product: string) => ApiMeta | undefined;
    /**
     * 获取编译使用的api版本号
     */
    getProductApiMeta: (product: string) => ProductApiMeta | undefined;
    /**
     * 获取所有子模块的ModuleModel对象
     *
     * @return {ModuleModel[]}
     */
    getAllModules: () => ModuleModel[];
}
