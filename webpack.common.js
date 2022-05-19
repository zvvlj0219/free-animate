const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "./src/client/index.tsx")
  },
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
            loader: "babel-loader",
            options: { plugins: ['react-refresh/babel'] }
          }
        ]
      },
      {
        // webpack5 assets modules
        test: /\.(png|jpg|gif)$/,
        generator: {
					filename: `./image/[name].[contenthash][ext]`,
				},
        type: "asset/resource"
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
						// PostCSSでcssを処理する
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [require("autoprefixer")({ grid: true })]
							}
						}
					},
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new CleanWebpackPlugin(), // clean up output directory before build
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new MiniCssExtractPlugin({
      filename:"./css/[name].[contenthash].css"
    })
  ],
};