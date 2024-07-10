import JSZip from 'jszip';
export declare class ZipUtil {
    private readonly BEGIN_TIME;
    private readonly zip;
    constructor();
    addFolder(dir: string, zip?: JSZip): Promise<this>;
    addFile(file: string): Promise<this>;
    outputZip(location: string): Promise<void>;
    static extractZIP(zipPath: string, savePath: string): Promise<void>;
    /**
     * 读取zip包根目录的文件信息
     *
     * @param zipPath zip包路径
     * @param fileList  需要读取的文件列表
     */
    static readFileInZIP(zipPath: string, fileList: string[]): Promise<Map<string, string>>;
}
