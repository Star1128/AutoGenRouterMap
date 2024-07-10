import { BaseCommandBuilder } from './base-command-builder.js';
export declare class JavaCommandBuilder extends BaseCommandBuilder {
    private _javaSystemList;
    constructor();
    addCalledJarFile(jarFile: string): JavaCommandBuilder;
    addJvmOption(jvmOption: string): JavaCommandBuilder;
    addClassPath(classpath: string): JavaCommandBuilder;
    addMainClass(mainClass: string): JavaCommandBuilder;
    build(): string[];
    /**
     * 声明java的系统变量, 格式为-D[key]=[value]
     *
     * @param {string} key
     * @param {string} value
     * @returns {JavaCommandBuilder}
     */
    setJavaSystemProperty(key: string, value: string): JavaCommandBuilder;
}
