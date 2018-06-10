const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: './main.jsx',
  output: {
    path: __dirname,
    filename: 'index.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],

};
