import { ProjectBuildProfile } from '../../options/build/project-build-profile.js';
import MaterialBuildOpt = ProjectBuildProfile.MaterialBuildOpt;
/**
 * 签名参数构造器的接口
 */
export interface CommandBuilder {
    /**
     * 获取实际调用的命令行
     *
     * @returns {string[]}
     */
    getSignCommand(): string[];
    /**
     * 根据build-profile中的签名配置, 初始化不同的命令行参数
     *
     * @param {ProjectBuildProfile.MaterialBuildOpt} material
     */
    initCommandParams(material: MaterialBuildOpt): void;
}
