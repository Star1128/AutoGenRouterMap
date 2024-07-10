import { Option } from '../options.js';
/**
 * pages.json object
 */
export declare namespace PagesJsonOption {
    interface PageObj extends Option {
        src: string[];
        window?: WindowObj;
    }
    interface WindowObj extends Option {
        designWidth: number;
        autoDesignWidth: boolean;
    }
}
