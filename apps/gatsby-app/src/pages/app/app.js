import React from "react"
import { Link } from "gatsby"
import { Get } from "react-axios"
import axios from "axios"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import App_menu from "./app_menu"

const SecondPage = () => (
  <Layout>
    <SEO title="App" />
    <App_menu />
  </Layout>
)

export default SecondPage
