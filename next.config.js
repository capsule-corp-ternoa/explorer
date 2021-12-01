module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack5: false,
  webpack: (config, { isServer }) => {
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