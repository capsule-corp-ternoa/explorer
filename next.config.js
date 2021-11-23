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
  webpack5: false,
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        dns: "mock",
        fs: "empty",
        path: true,
        url: false,
      }
    }

    return config
  },
  pageExtensions: [
    'page.tsx',
  ],
  target: 'experimental-serverless-trace',
  env: {
    INDEXER_BASE_URL: process.env.INDEXER_BASE_URL,
  }
}