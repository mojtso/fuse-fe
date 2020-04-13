import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "overmind-react"
import { App } from "./App"
import * as serviceWorker from "./serviceWorker"
import { overmind } from "./state"

ReactDOM.render(
  <Provider value={overmind}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
