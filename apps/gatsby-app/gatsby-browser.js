/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
const log = require("loglevel");
const axios = require("axios").default;

exports.onInitialClientRender = () => {
  axios.defaults.baseURL = process.env.GATSBY_SERVER_URL + "/api/v1/";
  log.setLevel(process.env.GATSBY_APP_LOG_LEVEL);
  log.info("landing ulr:", process.env.GATSBY_APP_URL);
  log.info("server url:", process.env.GATSBY_SERVER_URL);
}
