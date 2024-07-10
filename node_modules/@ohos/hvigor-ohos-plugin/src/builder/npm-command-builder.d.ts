import { BaseCommandBuilder } from './base-command-builder.js';
export declare class NpmCommandBuilder extends BaseCommandBuilder {
    constructor(npmPath?: string);
    runScript(script: string): NpmCommandBuilder;
    addScriptsOptions(): NpmCommandBuilder;
    install(): NpmCommandBuilder;
}
