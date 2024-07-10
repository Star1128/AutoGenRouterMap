import { CodeType } from '../../enum/code-type-enum.js';
import { CodeModel } from './code-model.js';
/**
 * 源码集合模型
 *
 * @since 2022/2/23
 */
export declare class CodeModelImpl implements CodeModel {
    private readonly _codeType;
    private readonly _srcPath;
    constructor(srcPath: string, codeType: CodeType);
    getSrcPath(): string;
    getCodeType(): CodeType;
}
