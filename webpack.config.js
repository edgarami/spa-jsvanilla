const path = require("path"); //Nos permite acceder a donde estámos en las carpetas. Ya sea en local o en la nube.
const htmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  //Donde se envía el proyecto estructurado y compilado listo para producción.
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  //Creamos el lugar dónde se exportará el proyecto.
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        // Estructura de Babel
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new htmlWebPackPlugin({
      inject: true,
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "./src/styles/styles.css", to: "" }],
    }),
  ],
};
