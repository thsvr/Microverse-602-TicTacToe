/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable import/no-unresolved */
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
  },
  optimization: {
    minimize: true,
    minimizer: [
    	new TerserPlugin({
	        terserOptions: {
	            keep_classnames: true,
	            keep_fnames: true,
	        },
	      }),
    	],
  },
};
