/*const nodeExternals = require('webpack-node-externals');
module.exports = {
webpack: (config, { isServer }) => {
  // Fixes npm packages that depend on fs module
  if (!isServer) {
    config.node = {
      fs: 'empty',
    };
  }
  else {
    config.externals = [nodeExternals()];
  }
  return config;
},
target: 'serverless',
};
*/
module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    return config
  },
  pageExtensions: [
    'page.tsx',
  ],
  target: 'experimental-serverless-trace',
  env: {
    BASE_URL: process.env.BASE_URL,
  }
}