import { NativeCodemodel } from './native-codemodel.js';
/**
 * 读取cmake生成的codemodel模型, 生成NativeCodemodel
 */
export declare class GenerateCodemodel {
    private _log;
    private readonly _codemodel;
    private readonly reply;
    private readonly index;
    constructor(outputDir: string);
    getCodemodel(): NativeCodemodel | undefined;
    getObjFromIndex<T>(key: string): T | undefined;
    private generateCodemodel;
    private readCodemodel;
    private readIndex;
    private readTarget;
}
