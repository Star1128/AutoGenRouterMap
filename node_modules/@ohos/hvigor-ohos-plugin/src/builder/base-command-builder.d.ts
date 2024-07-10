export declare class BaseCommandBuilder {
    protected commandList: string[];
    constructor(commandList: string[]);
    build(): string[];
    addAllParams(params: string[]): string[];
}
