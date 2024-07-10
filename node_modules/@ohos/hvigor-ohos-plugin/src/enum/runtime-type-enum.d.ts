export declare enum RuntimeTypeEnum {
    UNDEFINED = 0,
    OpenHarmony = 1,
    HARMONY_OS = 2
}
export declare namespace RuntimeTypeEnum {
    function valueOf(runtimeOSStr: string | undefined): RuntimeTypeEnum;
}
