import React from "react"
import { Link } from "gatsby"
import Auth0Provider from "@auth0/auth0-react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainFeatures from "../components/mainfeatures/mainfeatures"
import Services from "../components/services/services"
import Footer from "../components/footer/index"
import StartNow from "../components/startnow/startnow"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StartNow />
    <MainFeatures />
    <Services />
    <Footer />
  </Layout>
)

export default IndexPage
