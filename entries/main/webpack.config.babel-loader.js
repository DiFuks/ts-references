const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  output: {
    path: path.resolve(process.cwd(), './dist/webpack-babel-loader'),
    filename: 'index.js',
  },
  resolve: { extensions: ['.ts', '.js'] },
  devtool: 'source-map',
  module: {
    rules: [{ test: /\.(js|tsx?)$/, loader: 'babel-loader', exclude: /node_modules/ }],
  },
}
