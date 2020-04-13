import React, { useEffect, useState, FunctionComponent } from "react"
import gsap from "gsap"
import { Banner } from "../components/banner/banner"
import { Articles } from "../components/articles/articles"
import { RouteComponentProps } from "@reach/router"

export const Home: FunctionComponent<RouteComponentProps> = () => {
  return (
    <>
      <Banner />
      <Articles />
    </>
  )
}
