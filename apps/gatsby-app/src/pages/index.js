import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainFeatures from "../components/mainfeatures/mainfeatures"
import Services from "../components/services/services"
import Footer from "../components/footer/index"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainFeatures />
    <Services />
    <Footer />
  </Layout>
)

export default IndexPage
