import React from "react"
import { VkSignInButton } from "@riaskov/vk-signin-widget"

function Application() {
  return (
    <>
      <VkSignInButton
        className=""
        appId={}
        redirectURL={"https://vk.toivo.tech/api/v0/vk-signin-redirect"}
      ></VkSignInButton>
    </>
  )
}

export default Application
