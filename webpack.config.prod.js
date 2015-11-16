/* eslint no-var: 0 */
var path = require('path');
var webpack = require('webpack');

// In webpack.config.js
module.exports = {
  entry: path.resolve(__dirname, 'src', 'react', 'app.js'),
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
      '__DEVTOOLS__': false,
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          stage: 0,
        },
      },
    ],
  },
  output: {filename: 'react-bundle.js', path: path.join(__dirname,'dist', 'static','js')},
};
