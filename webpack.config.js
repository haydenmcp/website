const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const path = require("path");

module.exports = () => {
  return {
    mode: "development",
    target: "web",
    context: path.resolve(__dirname, "."),
    output: {
      path: path.resolve(__dirname, "build"),
      globalObject: "this",
    },
    entry: "./packages/website/src/index.html",
    plugins: [
      new HtmlWebpackPlugin({
        template: "./packages/website/src/index.html",
      }),
    ],
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: "html-loader",
        },
      ],
    },
  };
};
