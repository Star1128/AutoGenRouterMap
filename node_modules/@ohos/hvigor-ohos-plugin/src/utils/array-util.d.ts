/**
 * 获取两个集合的交集
 *
 * @param arr1 集合1
 * @param arr2 集合2
 */
export declare function getIntersection<T>(arr1: T[], arr2: T[]): T[];
/**
 * 根据name获取一个以某个key为唯一标识的集合中的元素
 *
 * @param arr1 数组
 * @param elementName 元素name
 * @param uniqueKey 用于判定唯一标识的key
 */
export declare function getElementFromArr<T extends Record<string, unknown>>(arr1: T[] | undefined, elementName: string, uniqueKey?: string): T | undefined;
/**
 * 找出数组内重复元素
 *
 * @param list list
 * @return 重复元素列表
 */
export declare function findDuplicateElement<T>(list: T[]): T[];
/**
 * 判断集合是否一致(有序)
 *
 * @param list1 list1
 * @param list2 list2
 */
export declare function checkArrayIsSame(list1: string[], list2: string[]): boolean;
/**
 * 判断两个集合元素是否一致(无序）
 *
 * @param list1 list1
 * @param list2 list2
 */
export declare function checkArrayElementIsSame(list1: string[], list2: string[]): boolean;
/**
 * 判断目标数组是否为原始数组的子集
 *
 * @param originArr 原始数组
 * @param targetArr 目标数组
 */
export declare function isSubset(originArr: any[], targetArr: any[]): boolean;
/**
 * 获取目标数组子集在原始数组集合中的补集
 *
 * @param originArr 原始数组
 * @param targetArr 目标数组
 */
export declare function complementarySet(originArr: any[], targetArr: any[]): any[];
/**
 * 判断两个集合是否存在交集
 *
 * @param arr1 arr1
 * @param arr2 arr2
 */
export declare function checkIntersection(arr1: any[] | undefined, arr2: any[] | undefined): boolean;
/**
 * 获取两个数组的并集
 * @param arr1
 * @param arr2
 */
export declare function getUnionSet(arr1?: any[], arr2?: any[]): any[];
/**
 * 获取两个集合的交集
 * @param set1
 * @param set2
 */
export declare function getIntersectedSet(set1: Set<string> | undefined, set2: Set<string> | undefined): Set<string>;
