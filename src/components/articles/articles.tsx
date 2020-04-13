import React, { FunctionComponent } from "react"
import { format } from "date-fns"
import { MdAccessTime } from "react-icons/md"
import Loader from "react-loader-spinner"
import { RouteComponentProps, Link } from "@reach/router"
import { useOvermind } from "../../state"
import { Banner, PostDate } from "../../api/models"

interface Props extends RouteComponentProps {
  title: string
  url: string
  slug: string
  author: string
  category: string
  banner: Banner
  postDate: PostDate
}

const dateTime = (date: Date) => format(date, "MMMM d, yyyy")

export const Articles = () => {
  const {
    state: {
      blogs: { blogs, loading },
    },
  } = useOvermind()

  const Blog: FunctionComponent<Props> = ({
    title,
    category,
    author,
    url,
    slug,
    banner,
    postDate,
  }) => {
    return (
      <>
        <Link to={`/blog/${slug}`}>
          <div className="article">
            <div className="article-details">
              <span className="category">{category}</span>
              <span className="title">{title}</span>
              <div className="date-author">
                <span>
                  <p className="date">{dateTime(new Date(postDate.date))}</p>
                </span>
                <span>
                  <p className="author">{author.toLocaleLowerCase()}</p>
                </span>
              </div>
            </div>
            <div className="article-image">
              <img src={`${banner.image.url}`} alt="images" />
            </div>
          </div>
        </Link>
      </>
    )
  }

  return loading ? (
    <div className="loading-articles">
      <div>
        <Loader type="TailSpin" color="#000000" height={50} width={50} />
      </div>
    </div>
  ) : (
    <div className="articles">
      <div className="container-fluid">
        <div className="row">
          {blogs.length ? (
            blogs.map((item, i) => {
              return <Blog {...item} key={i} />
            })
          ) : (
            <div className="no-blog-list">
              <p>Sorry no blogs available :(</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
