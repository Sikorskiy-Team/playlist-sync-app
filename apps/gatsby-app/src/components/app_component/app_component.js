import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { Link } from "gatsby"
import { Get } from "react-axios"
import axios from "axios"

import Layout from "../layout"
import SEO from "../seo"
import App_menu from "../app_menu/app_menu"

const App = () => {
  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout
  } = useAuth0()

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Oops... {error.message}</div>
  }

  if (isAuthenticated) {
    return (
      <Layout>
        <SEO title="App" />
        <App_menu user={user} />
        <div>
          <button
            onClick={() => logout({ returnTo: process.env.GATSBY_AUTH0_CALLBACK })}
            style={{"position": "absolute"}}
          >
            Log out
          </button>
        </div>
      </Layout>)
  } else {
    return <button onClick={loginWithRedirect}>Log in</button>
  }
}

export default App
