import { JavaCommandBuilder } from '../java-command-builder.js';
/**
 * 新签名工具hap-sign-tool的签名options
 *
 * @since 2022/03/01
 */
export declare class NewSigningOptions extends JavaCommandBuilder {
    sign(): NewSigningOptions;
    addMode(mode: string): NewSigningOptions;
    addProfileFile(profile: string): NewSigningOptions;
    profileSigned(): NewSigningOptions;
    addInForm(inFormType: string): NewSigningOptions;
    addSignAlg(signAlg: string): NewSigningOptions;
    addKeyAlias(privateKey: string): NewSigningOptions;
    addKeyStoreFile(keyStoreFile: string): NewSigningOptions;
    addKeyStorePwd(keyStorePwd: string): NewSigningOptions;
    addKeyPwd(keyAliasPwd: string): NewSigningOptions;
    addAppCertFile(certPath: string): NewSigningOptions;
    addInputFile(inputFile: string): NewSigningOptions;
    addOutputFile(outputFile: string): NewSigningOptions;
}
