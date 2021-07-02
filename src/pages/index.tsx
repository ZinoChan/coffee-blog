import * as React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Posts from "../components/Posts"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Posts />
  </Layout>
)

export default IndexPage
