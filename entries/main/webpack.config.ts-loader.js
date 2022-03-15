const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  output: {
    path: path.resolve(process.cwd(), './dist/webpack-ts-loader'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.ts', '.js',],
    symlinks: false,
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.(js|tsx?)$/,
      include: [
        process.cwd(),
        path.resolve(process.cwd(), '../submodule/src'),
      ],
      use: { loader: 'ts-loader', options: { projectReferences: true } },
      exclude: /node_modules/
    }],
  },
}
