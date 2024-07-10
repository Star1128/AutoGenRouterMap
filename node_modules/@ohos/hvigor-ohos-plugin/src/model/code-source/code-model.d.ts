import { CodeType } from '../../enum/code-type-enum.js';
export interface CodeModel {
    /**
     * 获取该源码的路径
     */
    getSrcPath: () => string;
    /**
     * 获取该源码的类型
     */
    getCodeType: () => CodeType;
}
