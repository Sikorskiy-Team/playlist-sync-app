import React from "react"
import { Link } from "gatsby"
import { Get } from 'react-axios'

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="App" />
    <h1>Hi from the second page</h1>
    <p>It will be our app</p>
    <Get url="users">
      {(error, response, isLoading, makeRequest, axios) => {
        if(error) {
          return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
        }
        else if(isLoading) {
          return (<div>Loading...</div>)
        }
        else if(response !== null) {
          return (<div>{response.data.message} <button onClick={() => makeRequest({ params: { refresh: true } })}>Refresh</button></div>)
        }
        return (<div>Default message before request is made.</div>)
      }}
    </Get>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
