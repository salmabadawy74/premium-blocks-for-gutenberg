// node module that let's us do file system stuffs...
const path = require('path');
const webpack = require('webpack');


// Webpack expects an exported object with all the configurations, so we export an object here
module.exports = {
    entry: './src/index.js', // Where to find our main js
    output: {
        path: path.resolve(__dirname, 'assets/js'),
		filename: '[name].js'
    }, 
    module: {
        rules: [
            { 
                // basically tells webpack to use babel with the correct presets
                test: /\.(js|jsx|mjs)$/,
                loader: 'babel-loader',
//                query: {
//                    presets: ['@babel/preset-env', '@babel/preset-react']
//                }
            }
        ]
    },
};

if (process.env.NODE_ENV === 'production') {
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: false,
			compress: {
				warnings: false
			}
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	])
}