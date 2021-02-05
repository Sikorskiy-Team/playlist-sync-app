import React from "React"
import { Link } from "gatsby"
import { Router } from "@reach/router"
import { login, isAuthenticated, getProfile } from "../../../utils/auth"
import LoginButton from "../../../components/loginButton"

import logo from "../../../images/Logofoot.png"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"

import {
  Login_styles,
  Title_style,
  Button_style,
  Buttontext_style,
} from "./login.styles"
import { Auth0Provider } from "@auth0/auth0-react"

const LoginPage = () => {
  return (
    <div>
      <SEO title="Login" />
      <Auth0Provider redirectUri="http://localhost:8000">
        <Login_styles>
          <img src={logo} className="logo-pic"></img>
          <Title_style>Login to CubeMusic</Title_style>
          <LoginButton />
        </Login_styles>
      </Auth0Provider>
    </div>
  )
}

export default LoginPage

// /*
// <Button_style>
//     <Buttontext_style>Continue with Google</Buttontext_style>
// </Button_style>
// */
