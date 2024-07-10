import { Option } from '../options.js';
export declare namespace FormConfigJson {
    interface FormConfigJsonObj {
        forms?: FormConfig[];
    }
    interface FormConfig extends Option {
        uiSyntax?: 'arkts' | 'hml';
        src: string;
    }
}
