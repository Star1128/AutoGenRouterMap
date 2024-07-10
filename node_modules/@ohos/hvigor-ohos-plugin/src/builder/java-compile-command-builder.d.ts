import { BaseCommandBuilder } from './base-command-builder.js';
export declare class JavaCompileCommandBuilder extends BaseCommandBuilder {
    constructor();
    addEncoding(encoding: string): JavaCompileCommandBuilder;
    addTarget(target: string): JavaCompileCommandBuilder;
    addSource(source: string): JavaCompileCommandBuilder;
    addBootClasspath(bootClasspath: string): JavaCompileCommandBuilder;
    addClasspath(classpath: string): JavaCompileCommandBuilder;
    addDest(dest: string): JavaCompileCommandBuilder;
    addProcessor(processor: string): JavaCompileCommandBuilder;
    addProcessorPath(processorPath: string): JavaCompileCommandBuilder;
    addIndexFile(indexFile: string): JavaCompileCommandBuilder;
    showDebugInfo(): JavaCompileCommandBuilder;
    addJavaOption(javaOption: string): JavaCompileCommandBuilder;
}
