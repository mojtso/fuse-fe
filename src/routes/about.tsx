import React, { FunctionComponent } from "react"
import { RouteComponentProps } from "@reach/router"

export const About: FunctionComponent<RouteComponentProps> = () => {
  return (
    <div className="page">
      <div className="container">
        <div className="row">
          <h3>This is the about page</h3>
        </div>
      </div>
    </div>
  )
}
