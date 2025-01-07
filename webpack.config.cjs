const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  return {
    entry: "./src/main.js",
    mode: env.prod ? "production" : "development",
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./index.html",
      }),
      new HtmlWebpackPlugin({
        filename: "request-feedback.html",
        template: "./request-feedback.html",
      }),
    ],
    devServer: env.prod
      ? {}
      : {
          static: {
            directory: path.join(__dirname, "dist"),
          },
          hot: true,
          port: 8080,
          open: true,
        },
    output: {
      path: path.resolve(__dirname, "./dist"),
      clean: true,
      filename: "[name].js",
      assetModuleFilename: "[name][ext]",
    },
    module: {
      rules: [
        {
          test: /\.(?:js|mjs|cjs)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [["@babel/preset-env"]],
            },
          },
        },
        {
          test: /\.css$/i,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" },
            { loader: "postcss-loader" },
          ],
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|webp)$/i,
          type: "asset/resource",
        },
      ],
    },
  };
};
