const Htmlwebpackplugin = require("html-webpack-plugin");

const mini = require("mini-css-extract-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new Htmlwebpackplugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    new mini({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
};
