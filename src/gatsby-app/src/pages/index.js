import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to our new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/app/">Go to App</Link> <br />
  </Layout>
)

export default IndexPage
