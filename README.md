# VK Signin Widget for React

Unofficial VK signin button component for React 18

## Usage

```tsx
import { VkSignInButton } from "@riaskov/vk-signin-widget"

<VkSignInButton
    appId={12345678}
    redirectURL={"https://example.com"}>
</VkSignInButton>
```

## Docs

### Params

| Param                      | Type     | Description                                                                                              |
|----------------------------|----------|----------------------------------------------------------------------------------------------------------|
| appId **(required)**       | number   | App ID from [VK ID Management Console](https://id.vk.com/about/business/go)                              |
| redirectURL **(required)** | string   | One of **Trusted redirect URLs** from [VK ID Management Console](https://id.vk.com/about/business/go)    |
| className                  | string   | One or more space-separated classes (see available further in docs), just names, no dots before classes! |
| onClickBeforeLogin(e)      | Function | Callback to execute before redirecting to [id.vk.com](id.vk.com)                                         |
| state                      | string   | Random data for passing to redirectURL                                                                   



### "className" param and UI

| className                    | UI                                                                                                         |
|------------------------------|------------------------------------------------------------------------------------------------------------|
| Without any className passed |  |
| btn-secondary                |  |
| rounded-1                    | ![image](https://github.com/ARyaskov/vk-signin-widget/assets/3934848/aa741ead-405a-4afd-a76a-e8753475fc4c) |
| rounded-2                    | ![image](https://github.com/ARyaskov/vk-signin-widget/assets/3934848/1925ea29-8296-4070-b628-25e01cb8e1d7) |
| rounded-3                    | ![image](https://github.com/ARyaskov/vk-signin-widget/assets/3934848/2e377bbb-0b34-4bda-a8ad-74d4f6f72dc5) |
| no-text                      |  |
| btn-sm                       |                                                                                                            |
| btn-lg                       |                                                                                                            |

You can combine classes to get the desired UI, e.g. `className="btn-secondary rounded-1 no-text"`

## Acknowledgements
VK logo images received from public [VK ID Docs](https://id.vk.com/about/business/go/docs/en/vkid/latest/vk-id/connection/web/auth); all rights on VK assets and trademark belong to [VK](https://vk.company/)
