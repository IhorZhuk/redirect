var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");
var TEST_DIR = path.resolve(__dirname, "test");

var config = (env, argv) => {
  return {
    mode: argv.mode == 'production' ? 'production' :  'development',
    entry: SRC_DIR + "/app/index.js",
    output: {
      path: DIST_DIR + "/app",
      filename: "bundle.js",
      publicPath: "/app",
    },
    resolve: {
      alias: {
        Components: SRC_DIR + '/app/components',
        Reducers: SRC_DIR + '/app/reducers',
        Controllers: SRC_DIR + '/app/controllers',
        Pages: SRC_DIR + '/app/components/pages',
        Test: TEST_DIR 
      },
      extensions: ['.js', '.jsx'] 
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: SRC_DIR,
          use: {
            loader: "babel-loader",
          }
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
        }
      ] //rules
    }, //module
    plugins: [
      new ExtractTextPlugin('app.css')
    ]
  }
};

module.exports = config;