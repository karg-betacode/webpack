const path = require('path');                   // webpack spec requires absolute path

const HtmlwebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
    entry: { // Can be a string or Array of string or JSON notation
      vendor: ['babel-polyfill', 'lodash'],
      main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
      rules: [
          { 
            test: /\.jsx?$/, 
            loader: 'babel-loader',
            exclude: /node_modules/,            // Tell babel to ignore node_modules files. Alternatively can use include:
            options: {
                plugins: ['transform-runtime'], // This can be configured with .babelrc
                presets: ['es2015']
            }
          },
          {
            test: /\.hbs?$/, 
            loader: 'handlebars-loader' 
          }
      ]
    },
    plugins: [
      new UglifyJSPlugin({
        beautify: false,
        mangle: { screw_ie8 : true },
        compress: { screw_ie8: true, warnings: false },
        comments: false
      }),
      new HtmlwebpackPlugin({
        title: "test XXX",
        template: "src/index.html"
      }),
      new CommonsChunkPlugin({
          name: "vendor",
          filename: "vendor.bundle.js"
      })
    ]
};