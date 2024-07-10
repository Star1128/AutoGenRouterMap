import { ProjectBuildProfile } from '../../options/build/project-build-profile.js';
import { Product } from '../../plugin/context/plugin-context.js';
import ProductBuildOpt = ProjectBuildProfile.ProductBuildOpt;
import { ProjectModel } from '../../model/project/project-model.js';
export declare class CoreProduct implements Product {
    private productBuildOpt;
    private productName;
    private bundleName;
    private bundleType;
    private projectModel;
    constructor(productBuildOpt: ProductBuildOpt, projectModel: ProjectModel);
    transformToCoreProduct(): void;
    getBundleName(): string;
    getBundleType(): string;
    getProductName(): string;
}
