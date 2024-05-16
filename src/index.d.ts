declare module "@riaskov/vk-signin-widget" {
    import React from "react";
    import { AuthParams } from "@vkid/sdk/dist-sdk/types/auth/types";
    import { ConfigAuthMode } from "@vkid/sdk/dist-sdk/types/core/config/types";

    export type VKButtonProps = {
        appId: number;
        redirectURL: string;
        className?: string;
        onClickBeforeLogin?: (e: any) => void;
        label?: string;
        state?: string;
        loginPageParams?: VKButtonLoginPageParams & { mode?: VKButtonConfigAuthMode };
    };

    export type VKButtonLoginPageParams = AuthParams;
    export type VKButtonConfigAuthMode = ConfigAuthMode;

    export function VkSignInButton(props: VKButtonProps): JSX.Element;
}
