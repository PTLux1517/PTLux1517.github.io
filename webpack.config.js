const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
   output: {
      filename: "[contenthash].js",
      clean: true,
   },
   resolve: {
      extensions: [".js", ".ts", ".jsx", ".tsx"]
   },
   plugins: [
      new HtmlWebpackPlugin({
         title: "PTLux1517",
         template: "public/index.html",
         favicon: "public/favicon.ico",
         inject: true
      })
   ],
   module: {
      rules: [
         {test: /\.tsx?$/, loader: "ts-loader"},
         {test: /\.s[ac]ss$/i, use: ["style-loader","css-loader","sass-loader"]},
         {test: /\.(png|jpe?g|svg|ico)$/i, type: "asset/resource"}
      ]
   },
   devServer: {historyApiFallback: true}
};