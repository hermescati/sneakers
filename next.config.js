module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.stadiumgoods.com",
        port: "",
      },
    ],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};
