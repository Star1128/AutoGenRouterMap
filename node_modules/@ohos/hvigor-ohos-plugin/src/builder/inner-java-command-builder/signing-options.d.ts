import { JavaCommandBuilder } from '../java-command-builder.js';
export declare class SigningOptions extends JavaCommandBuilder {
    sign(): SigningOptions;
    addMode(mode: string): SigningOptions;
    addProfile(profile: string): SigningOptions;
    addSignAlg(signAlg: string): SigningOptions;
    addPrivateKey(privateKey: string): SigningOptions;
    profileSigned(): SigningOptions;
    addKeyStore(keyStoreFile: string): SigningOptions;
    addKeyStorePwd(keyStorePwd: string): SigningOptions;
    addKeyAliasPwd(keyAliasPwd: string): SigningOptions;
    addCertPath(certPath: string): SigningOptions;
    addKs(ks: string): SigningOptions;
    addKsPass(ksPass: string): SigningOptions;
    addKsKeyAlias(ksKeyAlias: string): SigningOptions;
    addKeyPass(keyPass: string): SigningOptions;
    addOut(out: string): SigningOptions;
    addInputFile(inputFile: string): SigningOptions;
    addOutputFile(outputFile: string): SigningOptions;
    add(param: string): SigningOptions;
}
