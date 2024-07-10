export interface ExtraInfo {
    /**
     * 工程模型状态
     *
     * @return true:对应module.json5,false:对应config.json
     */
    isStageMode(): boolean;
}
