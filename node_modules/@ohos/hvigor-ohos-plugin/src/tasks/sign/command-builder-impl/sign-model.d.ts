import { SignTypeEnum } from '../../../enum/sign-type-enum.js';
/**
 * 定义签名工具的输入输出和类型
 *
 * @since 2022/1/20
 */
export declare class SignModel {
    private readonly _signTypeEnum;
    private readonly _inputFilePath;
    private readonly _outputFilePath;
    constructor(signType: SignTypeEnum, inputFilePath: string, outputFilePath: string);
    getSignType(): SignTypeEnum;
    getInputFilePath(): string;
    getOutPutFilePath(): string;
}
