const path = require('path');

module.exports = {
    env: {
        CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
        CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN
    },
    webpack: config => {
      config.resolve.alias['~'] = path.resolve(__dirname);
      return config;
    }
}
