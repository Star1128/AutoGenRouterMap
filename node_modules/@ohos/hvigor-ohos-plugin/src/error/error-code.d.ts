import { ECM } from './error-code-map.js';
export declare class ErrorCode {
    private apiType;
    private moduleType;
    private taskGroup;
    private detailsError;
    private static instance;
    static getInstance(): ErrorCode;
    /**
     * 生成错误码
     * @returns {string}
     */
    createErrorCode(): string;
    reset(): void;
    getApiType(): ECM.ApiTypeKey;
    setApiType(apiType: ECM.ApiTypeKey): void;
    getModuleType(): ECM.ModuleTypeKey;
    setModuleType(module: ECM.ModuleTypeKey): void;
    getDetailsError(): ECM.DECE;
    setDetailsError(detailsError: ECM.DECE): void;
    getTaskGroup(): string;
    setTaskGroup(taskGroup: string): void;
}
