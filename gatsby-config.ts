import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `PhotoPlus - Leading Batch Photo Company in Sri Lanka`,
    description: `Professional batch photography services for universities in Sri Lanka. Specializing in graduation photos, event photography, drone shots, and custom photo frames.`,
    author: `PhotoPlus`,
    siteUrl: `https://photoplus.lk`,
    keywords: `batch photography, university photos, graduation photos, Sri Lanka, event photography, drone shots`,
    image: `/og-image.jpg`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'PhotoPlus',
        short_name: 'PhotoPlus',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#000000',
        display: 'minimal-ui',
        icon: "src/images/icon.png",
        icons: [
          {
            src: "src/images/icon.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "src/images/icon.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      }
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Raleway:300,400,500,600,700,800,900',
        ],
        display: 'swap',
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          "GA_TRACKING_ID", // Replace with your Google Analytics tracking ID
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
  ]
};

export default config;
