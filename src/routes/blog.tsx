import React, { FunctionComponent } from "react"
import { RouteComponentProps } from "@reach/router"
import { useOvermind } from "../state"
import { useMount } from "react-use"
import { Markup } from "interweave"

import fallbackImg from "../assets/fallback-img.jpg"

export const Blog: FunctionComponent<RouteComponentProps> = ({ location }) => {
  const {
    actions: {
      blogs: { getBlogBySlug },
    },
    state: {
      blogs: { currentBlog, loading },
    },
  } = useOvermind()
  const imageUrl =
    currentBlog.length > 0 ? currentBlog[0].banner.image.url : fallbackImg
  useMount(() => {
    let slug: any = location?.pathname.split("/")[2]
    getBlogBySlug(slug)
  })

  return (
    <>
      <section className="main" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="container">
          <div className="row">
            <h2>
              <div className="line">
                <span style={{ opacity: 0.9, color: "#00000" }}>
                  {currentBlog.length > 0 && currentBlog[0].banner.title}
                </span>
              </div>
            </h2>
            <div className="bottom-copy">
              <h5>
                <div className="line">
                  <span
                    style={{
                      mixBlendMode: "unset",
                      opacity: 1,
                      fontSize: "18px",
                      fontWeight: 400,
                    }}
                  >
                    {currentBlog.length > 0 &&
                      currentBlog[0].banner.description}
                  </span>
                </div>
              </h5>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row" style={{ padding: '40px 0 120px'}}>
          {!loading ? (
            <div className="blog-data" style={{maxWidth: '654px', margin: '0 auto'}}>
              {currentBlog.length > 0 ? (
                <Markup content={currentBlog[0].pageData} />
              ) : (
                <div className="no-blog-list">
                  <p>Sorry no blogs available :(</p>
                </div>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  )
}
