/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
        (rule) => rule.test && rule.test.test(".svg")
    );
    fileLoaderRule.exclude = /\.icon\.svg$/;
    config.module.rules.push({
      test: /\.icon\.svg$/,
      loader: '@svgr/webpack',
      options: {
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  cleanupIDs: false,
                  collapseGroups: false
                }
              }
            }
          ]
        }
      }
    });
    return config;
  },
}

module.exports = nextConfig
