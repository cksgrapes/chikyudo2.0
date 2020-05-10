const path = require('path')

module.exports = {
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
    IG_BUSINESS_ACCOUNT: process.env.IG_BUSINESS_ACCOUNT,
    IG_ACCESS_TOKEN: process.env.IG_ACCESS_TOKEN,
    PREVIEW_SECRET_TOKEN: process.env.PREVIEW_SECRET_TOKEN,
  },
  webpack: (config) => {
    config.resolve.alias['~'] = path.resolve(__dirname)
    return config
  },
}
