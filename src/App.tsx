import React, { useEffect, useState } from "react"
import { Router } from "@reach/router"
import { useMount } from "react-use"
import gsap from "gsap"
import "./styles/App.scss"
import { Header } from "./components/header/header"
import { Home } from "./routes/home"
import { Services } from "./routes/services"
import { About } from "./routes/about"
import { Contact } from "./routes/contact"
import { Navigation } from "./components/navigation/navigation"
import { useOvermind } from "./state"
import { Blog } from "./routes/blog"

export const App = () => {
  const {
    actions: {
      blogs: { getAllBlogs },
    },
  } = useOvermind()

  useMount(getAllBlogs)

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  })

  useEffect(() => {
    const handleWindowResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      })
      console.log(window.innerHeight)
    }

    window.addEventListener("resize", handleWindowResize)

    gsap.to("body", 0, { css: { visibility: "visible" } })
    let vh = dimensions.height * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)
  }, [])

  return (
    <>
      <Header />
      <div className="App">
        <Router>
          <Home default />
          <Services path="/services" />
          <About path="/about-us" />
          <Contact path="/contact-us" />
          <Blog path="/blog/:slug" />
        </Router>
      </div>
    </>
  )
}
