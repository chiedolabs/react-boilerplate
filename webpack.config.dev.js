/* eslint no-var: 0 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/react/app',
  ],
  output: {
    path: path.join(__dirname,'dist', 'static','js'),
    filename: 'react-bundle.js',
    publicPath: '/static/js/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV) || JSON.stringify('development'),
        'API_URL': JSON.stringify(process.env.API_URL) || JSON.stringify('http://localhost:8000'),
      },
      '__DEVTOOLS__': true,
    }),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: path.join(__dirname, 'src','react'),
      query: {
        'presets': ['react', 'es2015'],
        'env': {
          'development': {
            'plugins': [
              ['react-transform', {
                'transforms': [{
                  'transform': 'react-transform-hmr',
                  'imports': ['react'],
                  'locals': ['module'],
                }, {
                  'transform': 'react-transform-catch-errors',
                  'imports': ['react', 'redbox-react'],
                }],
              }],
            ],
          },
        },
      },
    }],
  },
};
