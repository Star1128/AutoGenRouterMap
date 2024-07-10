import { CodeType } from '../../enum/code-type-enum.js';
import { CodeModel } from '../code-source/code-model.js';
import { CoreResModelImpl } from '../res/core-res-model-impl.js';
import { SourceSetModel } from './source-set-model.js';
/**
 * module中每个target对应的一个sourceSet对象
 *
 * @since 2022/2/24
 */
export declare abstract class CoreSourceSetImpl implements SourceSetModel {
    protected readonly sourceSetRoot: string;
    protected readonly codeMap: Map<CodeType, CodeModel>;
    protected readonly targetResModel: CoreResModelImpl;
    constructor(sourceSetRoot: string, targetResModel: CoreResModelImpl);
    getSourceSetRoot(): string;
    getCodeMap(): Map<CodeType, CodeModel>;
    getTargetResPath(): string;
    private initCodeMap;
    abstract getTargetSourceSetModuleName(): string | undefined;
}
