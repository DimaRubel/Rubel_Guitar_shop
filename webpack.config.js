const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const RobotstxtPlugin = require("robotstxt-webpack-plugin");

const options = { 
  filePath: "robots.txt",
};

const path = require('path');
let mode = "development"
let target = "web";

if(process.env.NODE_ENV === "production") {
  mode = "production";
}

module.exports = {
  mode: mode,
  target: target,

  output: {
    path: path.resolve(__dirname,"build"),
    assetModuleFilename: "images/[hash][ext][query]",
  },

  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/i,
        type: "asset/resource",
        generator: {
          filename: 'fonts/[name][ext][query]',
        }
      },
      { 
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      }, 
      {
        test: /\.css$/i,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
        ],
      },
      {
        test: /\.scss$/i,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
            "resolve-url-loader",
            "sass-loader"
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./project/public/index.html",
    }),
    new RobotstxtPlugin(options),
  new CopyPlugin({
    patterns: [
          {
            from: "image/**",
            context: "./project/public"
          },
        ],
    }),
  ],

  resolve: {
    extensions: [".js", ".jsx"],
  },

  devServer: {
    hot: true,
    writeToDisk: true,
    port: 8080,
    historyApiFallback: {
      index: '/'
    }
  },
  entry: './project/src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
};
