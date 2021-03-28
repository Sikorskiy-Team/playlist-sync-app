import React from "react"
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react"
import App from "../components/app_component/app_component"

const AppPage = () => (
  <App />
)

export default withAuthenticationRequired(AppPage)
