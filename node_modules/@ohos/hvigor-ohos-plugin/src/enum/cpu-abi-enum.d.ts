export declare enum CpuAbiEnum {
    ARM64_V8A = "aarch64-linux-ohos",
    ARMEABI_V7A = "arm-linux-ohos",
    X86_64 = "x86_64-linux-ohos"
}
/**
 * 为CpuAbiEnum枚举类型附加方法
 *
 * @since 2022/2/25
 */
export declare namespace CpuAbiEnum {
    const getCpuType: (type: string) => CpuAbiEnum;
}
