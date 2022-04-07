const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  entry: path.resolve(__dirname, "./src/client/index.tsx"),
  resolve: {
    modules: [path.resolve(__dirname, "node_modules")],
    extensions: [ ".tsx", ".ts",".js"]
  },
  optimization: {
    // Module names are hashed into small numeric values
    moduleIds: "deterministic",
    // create a single runtime bundle for all chunks
    runtimeChunk: "single",
    // splite modules file from bundle file
    splitChunks :{
      cacheGroups: {
        vendor: {
          // include all types of chunks
          chunks: "all",
          test: /node_modules/,
          name: "vender"
        }
      }
    }
  },
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        test: [/\.ts$/],
        loader: "ts-loader",
        options: {
          transpileOnly: true,
          configFile: "./tsconfig.client.json",
        }
      },
      {
        exclude: /node_modules/,
        test: [/\.ts$/, /\.tsx$/],
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ],
      },
      {
        // images
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    // clean up output directory before build
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new MiniCssExtractPlugin({
      filename:"./css/[name].[contenthash].css"
    })
  ],
};