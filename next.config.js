const withImages = require("next-images")

module.exports = withImages({
  webpack: (config, options) => {
    // const isClient = !options.isServer
    // config.module.rules.push({
    //   test: /\.(png|jpg|jpeg|gif|svg)$/,
    //   use: [
    //     {
    //       loader: "file-loader",
    //       options: {
    //         outputPath: "static",
    //         publicPath: isClient ? "_next/static" : "_next/static",
    //         name: "[name].[contenthash].[ext]",
    //       },
    //     },
    //   ],
    // })
    return config
  },
})
