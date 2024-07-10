/**
 * quickfix.json文件里的state值:
 * 0 没有变化
 * 1 对比base有变化
 * 2 对比上次有变化
 */
export declare enum QuickFixEnum {
    UNCHANGED = 0,
    BASE = 1,
    LAST = 2
}
