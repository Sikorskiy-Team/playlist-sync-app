/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { navigate } from 'gatsby';
import log from "loglevel";
import axios from "axios";

export const onInitialClientRender = () => {
  axios.defaults.baseURL = process.env.GATSBY_SERVER_URL + "/api/v1/";
  log.setLevel(process.env.GATSBY_APP_LOG_LEVEL);
  log.info("landing ulr:", process.env.GATSBY_APP_URL);
  log.info("server url:", process.env.GATSBY_SERVER_URL);
}

const onRedirectCallback = (appState) => navigate(appState?.returnTo || '/app');

export const wrapRootElement = ({ element }) => {
  return (
    <Auth0Provider
      domain={process.env.GATSBY_AUTH0_DOMAIN}
      clientId={process.env.GATSBY_AUTH0_CLIENTID}
      redirectUri={process.env.GATSBY_AUTH0_CALLBACK}
      onRedirectCallback={onRedirectCallback}
    >
      {element}
    </Auth0Provider>
  );
};
