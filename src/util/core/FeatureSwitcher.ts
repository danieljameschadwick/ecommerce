import { FEATURE_STATUS } from "./Feature";

export class FeatureSwitcher {
    public static isEnabled(handle: string): boolean {
        return FEATURE_STATUS[handle];
    }
}
