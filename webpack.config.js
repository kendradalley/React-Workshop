const path = require('path')
const webpack = require('webpack')
const projectRoot = path.join(__dirname)
const assetPath = path.join(projectRoot, 'dist')


module.exports = {
  // tells Webpack where to start looking for source files
  context: projectRoot,
  // entry point to app
  entry: './src/index.js',
  // object for how and where Webpack will be writing output files
  output: {
    path: assetPath,
    filename: 'bundle.js',
    // path for dev server will be outputting a bundle 'in memory'
    publicPath: '/dist/'
  },
  // tells Webpack about the code it should be processing
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['', '.js', '.jsx', '.json']
  },
  // for logging
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  // options applied to modules being processed
  module: {
    // array that will be applied to files in modules, files are tested against a regex and if passed will process those files
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
