import { ConfigJson } from '../options/configure/config-json-options.js';
export declare enum AbilityTypeEnum {
    PAGE = "page",
    DATA = "data",
    SERVICE = "service",
    FORM = "form",
    TEST_RUNNER = "testrunner",
    WORKER = "worker"
}
export declare namespace AbilityTypeEnum {
    function valueOf(abilityObj: ConfigJson.AbilitiesObj): AbilityTypeEnum;
}
