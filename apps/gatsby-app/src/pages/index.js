import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainFeatures from "../components/mainfeatures"
import Services from "../components/services"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainFeatures />
    <Services />
  </Layout>
)

export default IndexPage
