import React, { FunctionComponent } from "react"
import { RouteComponentProps } from "@reach/router"

export const Contact: FunctionComponent<RouteComponentProps> = () => {
  return (
    <div className="page">
      <div className="container">
        <div className="row">
          <h3>This is the contact page</h3>
        </div>
      </div>
    </div>
  )
}
