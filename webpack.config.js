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
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        ]
    },
    // Webpack yells at you if you don't choose a mode...
    mode: 'development'
};