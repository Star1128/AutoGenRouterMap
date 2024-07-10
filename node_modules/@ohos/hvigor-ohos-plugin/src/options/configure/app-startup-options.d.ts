import { RequiredNamed } from '../options.js';
export declare namespace AppStartupOptions {
    interface AppStartupOpt extends RequiredNamed {
        startupTasks: StartupTaskObj[];
        configEntry: string;
    }
    interface StartupTaskObj extends RequiredNamed {
        name: string;
        srcEntry: string;
        dependencies: string[];
        excludeFromAutoStart: boolean;
        runOnThread: string;
        waitOnMainThread: boolean;
    }
}
