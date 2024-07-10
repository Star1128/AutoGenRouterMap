export declare namespace PackInfo {
    interface VersionObj {
        code: number;
        name: string;
        minCompatibleVersionCode?: number;
    }
    interface AppObj {
        bundleName: string;
        version: VersionObj;
    }
    interface FormObj {
        name: string;
        type: string;
        updateEnabled: boolean;
        scheduledUpdateTime: number;
        updateDuration: number;
        supportDimensions: string[];
        defaultDimension: string;
    }
    interface AbilityObj {
        visible: boolean;
        name: string;
        label: string;
        forms?: FormObj[];
    }
    interface DistroObj {
        moduleType: string;
        installationFree: boolean;
        deliveryWithInstall: boolean;
        moduleName: string;
    }
    interface ApiVersionObj {
        compatible: number;
        releaseType: string;
        target: number;
    }
    interface ExtensionAbilityObj {
        name: string;
        forms?: FormObj[];
    }
    interface ModuleObj {
        mainAbility: string;
        deviceType: string[];
        abilities: AbilityObj[];
        extensionAbilities?: ExtensionAbilityObj[];
        distro: DistroObj;
        apiVersion: ApiVersionObj;
    }
    interface SummaryObj {
        app: AppObj;
        modules: ModuleObj[];
    }
    interface PackageObj {
        deviceType: string[];
        moduleType: string;
        deliveryWithInstall: boolean;
        name: string;
    }
    interface PackInfoObj {
        summary: SummaryObj;
        packages: PackageObj[];
    }
    interface PackHapPathsObj {
        jsonPath: string;
        resourcePath: string;
        indexPath: string;
        packInfoPath: string;
        outPath: string;
        shellApkPath?: string[];
        assetsPath: string;
        dexPath?: string;
    }
}
