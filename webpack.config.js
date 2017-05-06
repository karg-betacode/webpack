const path = require('path');

module.exports = {
    entry: [
      'babel-polyfill',                         // Can be a string or Array of string
      './src/main.js'
    ],
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
          }
      ]
    }
};