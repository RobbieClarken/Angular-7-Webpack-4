'use strict';

const CleanWebpackPlugin   = require('clean-webpack-plugin');
const HtmlWebpackPlugin    = require('html-webpack-plugin');

const helpers              = require('./helpers');

module.exports = {
    entry: {
        vendor: './src/vendor.ts',
        polyfills: './src/polyfills.ts',
        main: './src/main.ts'
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    'to-string-loader',
                    { loader: 'css-loader', options: { sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } }
                ],
                include: helpers.root('src', 'app')
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(
            helpers.root('dist'), { root: helpers.root(), verbose: true }),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};