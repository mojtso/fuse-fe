import React from "react"
import { Link } from "@reach/router"

export const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">Menu</div>
            <ul className="nav-links">
              <li>
                <Link
                  to="/services"
                  getProps={({ isCurrent }) => ({
                    className: `${isCurrent && "active"}`,
                  })}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  getProps={({ isCurrent }) => ({
                    className: `${isCurrent && "active"}`,
                  })}
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  getProps={({ isCurrent }) => ({
                    className: `${isCurrent && "active"}`,
                  })}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-column">
            <div className="nav-label">Contact</div>
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">Phone</li>
                <li>+27 (64) 684 2464</li>
              </ul>
            </div>
          </div>
          <div className="nav-column">
            <div className="nav-label">Address</div>
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">Joburg Office</li>
                <li>4 Tirsten Street</li>
                <li>Wanda Grove</li>
                <li>Randburg, 3453</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
