import { PkgBriefInfo } from '@ohos/hvigor-arkts-compose';
import { TargetTaskService } from '../tasks/service/target-task-service.js';
/**
 * 通过当前的targetService，获取所有依赖（包括远程&本地）hsp&har的模块信息
 * 包括sourceRoots，packageName，packageRoot
 * 其中，获取sourceRoots需要根据target获取，而依赖模块的target获取原则为：命令行指定 > 引用方 target > default
 * @param targetService
 * @return Record<packageName, PkgBriefInfo>
 */
export declare const getDependenciesPkgBriefInfo: (targetService: TargetTaskService) => Record<string, PkgBriefInfo>;
