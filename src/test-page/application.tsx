import React from "react"
import { VkSignInButton } from "../vk-signin-button"

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
