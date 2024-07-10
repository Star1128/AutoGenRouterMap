import { AppJson } from '../../options/configure/app-json-options.js';
import { ModuleJson } from '../../options/configure/module-json-options.js';
import { ModuleTaskService } from '../../tasks/service/module-task-service.js';
import AppOptObj = AppJson.AppOptObj;
import ModuleOptObj = ModuleJson.ModuleOptObj;
/**
 * 校验在系统hsp的配置下不可以打包（当前在har 和hap 中进行引用校验）
 *
 * @param  service 模块任务
 * @param appOptObj appjson5对象
 * @param  targetJsonPath json5文件路径
 * @param  targetModuleOptObj 模块对象
 */
export declare function validatePackageBySystemHspModel(service: ModuleTaskService, appOptObj: AppOptObj, targetJsonPath: string, targetModuleOptObj: ModuleOptObj): void;
