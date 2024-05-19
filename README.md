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
| without any className provided | ![image](https://github.com/ARyaskov/vk-signin-widget/assets/3934848/ed8b0389-b9a4-4449-aac6-d54c355205e3) |
| btn-secondary                | ![image](https://github.com/ARyaskov/vk-signin-widget/assets/3934848/ff4b10c7-75aa-4df6-9c17-9f0585307509) |
| rounded-1                    | ![image](https://github.com/ARyaskov/vk-signin-widget/assets/3934848/aa741ead-405a-4afd-a76a-e8753475fc4c) |
| rounded-2                    | ![image](https://github.com/ARyaskov/vk-signin-widget/assets/3934848/1925ea29-8296-4070-b628-25e01cb8e1d7) |
| rounded-3                    | ![image](https://github.com/ARyaskov/vk-signin-widget/assets/3934848/2e377bbb-0b34-4bda-a8ad-74d4f6f72dc5) |
| no-text                      | ![image](https://github.com/ARyaskov/vk-signin-widget/assets/3934848/81092dec-9d1b-44a8-b056-f52148f43e1f) |
| btn-sm                       | ![image](https://github.com/ARyaskov/vk-signin-widget/assets/3934848/f804dbad-01b0-4c54-a584-b0944ea6f7fe) |
| btn-lg                       | ![image](https://github.com/ARyaskov/vk-signin-widget/assets/3934848/3eff73e0-1808-4076-8dc3-c6e0d3a2e98b) |
| btn-secondary no-text        | ![image](https://github.com/ARyaskov/vk-signin-widget/assets/3934848/050aa182-9877-4035-ba80-5a9c9c842573) |
| no-text rounded-3            | ![image](https://github.com/ARyaskov/vk-signin-widget/assets/3934848/fb8f184a-3ab4-4a73-93bc-abe9c41ac14a) |



You can combine classes to get the desired UI, e.g. `className="btn-secondary rounded-1 no-text"`

## Acknowledgements
VK logo images received from public [VK ID Docs](https://id.vk.com/about/business/go/docs/en/vkid/latest/vk-id/connection/web/auth); all rights on VK assets and trademark belong to [VK](https://vk.company/)
