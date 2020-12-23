import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainFeatures from "../components/mainfeatures/mainfeatures"
import Services from "../components/services/services"
import Footer from "../components/footer/index"
import { Translation } from "react-i18next"
import { graphql } from "gatsby"
import { withI18next } from "@wapps/gatsby-plugin-i18next"

const IndexPage = () => (
  <Translation>
    {t => (
      <Layout>
        <SEO title="Home" />
        <MainFeatures />
        <Services />
        <Footer />
      </Layout>
    )}
  </Translation>
)

export default withI18next()(IndexPage)
export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...LocaleFragment
    }
  }
`
