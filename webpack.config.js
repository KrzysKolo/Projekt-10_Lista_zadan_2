const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: './src/index.js',
    output:  {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    watch: true,
    devtool: "source-map",
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
              test: /\.scss$/,
              use: [{
                loader: "style-loader",
              },
              {
                loader: "css-loader",
              },
              
            {
              loader: "sass-loader",
            }
              ]
          },
          {
            test: /\.(jpg|jpeg|gif|png)$/,
            use: {
              loader: "file-loader",
              options: {
                name: "images/[name].[ext]"
              }
            }
          }
        ]
      },

    plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html"
        })
      ]

};