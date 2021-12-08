import React from "react"
import ReactDom from "react-dom"
import App from "./App"
// Mount function to star up the app

const mount = (el) => ReactDom.render(<App/>, el)

// if we are in development and in isolation
//call Mount immediately
if(process.env.NODE_ENV === "development") {
 const devRoot = document.querySelector("#_marketing-feed-dev-root")
 if (devRoot) {
   mount(devRoot)
  }
}

//we are running through container
// and we should export the mount function

export { mount }