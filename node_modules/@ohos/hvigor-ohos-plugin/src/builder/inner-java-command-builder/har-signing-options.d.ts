import { NewSigningOptions } from './new-signing-options.js';
/**
 * 签名工具sdk-sign-tool的签名options
 *
 * @since 2024/05/11
 */
export declare class HarSigningOptions extends NewSigningOptions {
    sign(): this;
    addAppCertFile(certPath: string): this;
}
