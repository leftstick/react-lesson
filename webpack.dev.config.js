'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        index: [
            './js/index.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build', 'js'),
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle.js',
        publicPath: 'js/'
    },
    devtool: 'sourcemap',
    debug: true,
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style/useable!css!'
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components|webpack-dev-server)/,
                query: {
                    presets: [
                        'react',
                        'es2015'
                    ]
                }
            }
        ]
    },
    resolve: {
        root: [
            path.resolve(__dirname),
            path.resolve(__dirname, 'js')
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.bundle.js')
    ]
};
