import React from "react"
import Application from "./application"
import { createRoot } from "react-dom/client"
import "../index.sass"

const domNode = document.getElementById("container")
const root = createRoot(domNode)

root.render(<Application />)
