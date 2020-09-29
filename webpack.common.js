const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    },
     /* plugin */
     plugins: [
        /* HTML Webpack Plugin */
        new HtmlWebpackPlugin({
            template: "./src/template.html",
            filename: "index.html"
        })
    ],
    devServer: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
          "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
      }
}