const path = require("path");

const nextConfig = {
  experimental: {
    turbo: {
      enabled: true,
    },
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.webm$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: `/_next/static/videos/`,
          outputPath: `${isServer ? "../" : ""}static/videos/`,
          name: "[name].[hash].[ext]",
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;
