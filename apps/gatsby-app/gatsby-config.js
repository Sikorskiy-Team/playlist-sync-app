let activeEnv = process.env.GATSBY_ENV || 'development'

require('dotenv').config({
  path: `.env.${activeEnv}`,
})

const dynamicPlugins = []
// pick data from 3 months ago
const startDate = new Date()
startDate.setMonth(startDate.getMonth() - 3)
if (
  process.env.GATSBY_CLIENT_EMAIL &&
  process.env.GATSBY_PRIVATE_KEY &&
  process.env.GATSBY_GA_VIEW_ID
) {
  dynamicPlugins.push({
    resolve: `gatsby-plugin-guess-js`,
    options: {
      GAViewID: process.env.GATSBY_GA_VIEW_ID,
      jwt: {
        client_email: process.env.GATSBY_CLIENT_EMAIL,
        client_id: process.env.GATSBY_CLIENT_ID,
        private_key: process.env.GATSBY_PRIVATE_KEY,
      },
      period: {
        startDate,
        endDate: new Date(),
      },
    },
  })
}


module.exports = {
  siteMetadata: {
    title: `Playlist Sync App`,
    siteUrl: process.env.GATSBY_APP_URL,
    description: `This app will help you to sync playlists in different streaming platforms`,
    author: `Bondarenko Stanislav <stassss2009@gmail.com>, Zheleznova Valeriya <lzheleznova2609@gmail.com>, Tryfanov Dmytro <worthdyingfor8@gmail.com>, Deriugin Egor <gorynychgeorge@gmail.com>`, //TODO
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GA_TRACKING_ID,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-realfavicongenerator`,
      options: {
        apiKey: process.env.GATSBY_RFG_API,
        masterPicture: 'src/images/favicon.png',
        appName: 'Playlist Sync App',
        startUrl: '/',
        themeColor: '#000', //TODO
        display: 'standalone',
        defaultBackgroundColor: '#000',
        defaultMargin: '10%',
        compression: 3,
        scalingAlgorithm: 'Lanczos',
        ios: {
          enabled: true,
          onlyDefaultIcons: false,
          legacyIcons: true,
          precomposedIcons: true,
        },
        windows: {
          enabled: true,
          silhouette: true,
        },
        android: {
          enabled: true,
          legacyIcons: true,
          lowResIcons: true,
        },
        safariPinnedTab: {
          enabled: true,
          threshold: 60,
          silhouette: true,
        },
        openGraph: {
          enabled: true,
          ratio: 'square',
        },
        transformGeneratedManifest: (manifest) => {
          manifest.scope = '/';
          if (manifest.icons) {
            manifest.icons = manifest.icons.map((icon) => {
              return {
                ...icon,
                purpose: 'maskable',
              };
            });
          }

          return manifest;
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: process.env.GATSBY_APP_URL,
        policy: [
          { userAgent: '*', disallow: process.env.GATSBY_ROBOTS_DISALLOW },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`, TODO: Turn on when deploy
  ].concat(dynamicPlugins),
}
