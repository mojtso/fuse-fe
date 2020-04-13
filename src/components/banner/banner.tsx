import React from "react"
import { ReactComponent as RightArrow } from "../../assets/arrow-right.svg"

export const Banner = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>Minimalist</span>
            </div>
            <div className="line">
              <span>Blogging</span>
            </div>
            <div className="line">
              <span>Theme</span>
            </div>
          </h2>
          <div className="bottom-copy">
            <div className="divider">
              <hr />
            </div>
            <h5>
              <div className="line">
                <span>
                  Welcome to Neuro, Responsive and personal wordpress Theme.
                  Create News and Article with Maximum Flexibility.
                </span>
              </div>
            </h5>
          </div>
        </div>
      </div>
    </section>
  )
}
