import type { InternalProvider, ResponseInternal } from "../../types.js";
export interface PublicProvider {
    id: string;
    name: string;
    type: string;
    signinUrl: string;
    callbackUrl: string;
}
/**
 * Return a JSON object with a list of all OAuth providers currently configured
 * and their signin and callback URLs. This makes it possible to automatically
 * generate buttons for all providers when rendering client side.
 */
export declare function providers(providers: InternalProvider[]): ResponseInternal<Record<string, PublicProvider>>;
//# sourceMappingURL=providers.d.ts.map