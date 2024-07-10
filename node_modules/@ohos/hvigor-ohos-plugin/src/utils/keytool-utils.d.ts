/**
 * keytool工具的包装器
 *
 * @since 2022/5/9
 */
export declare class KeytoolUtils {
    private storeFile;
    private storePassword;
    private keyAlias;
    private dn;
    private storetype;
    private keytool;
    private baseArgs;
    constructor(storeFile: string, storePassword: string, keyAlias: string, dn: string);
    generateKeyPair(validity: number | undefined, keysize: number | undefined, keyalg: string | undefined, sigalg: string | undefined, startdate: Date | undefined): boolean;
    requestCert(outfile: string): boolean;
    generateCert(rfcoutput: boolean, validity: number, sigalg: string, startdate: Date, infile: string, outfile: string): boolean;
    importCert(trustcacerts: boolean, infile: string): boolean;
    private execute;
    private addArg;
}
