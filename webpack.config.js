const path = require('path');
const loader = require('sass-loader');
const MiniCssExtraPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    output: {

        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
        // publicPath: '/'

    },

    devServer: {
        port: 3003,
        // watchContentBase: true,
        historyApiFallback: true
    },

    

    module: {
        rules: [

            {
                test: /\.js$|jsx/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },

            {
                test: /\.scss$/,
                use: [

                    MiniCssExtraPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]

            }
        ]
    },

    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:3003'
        })
    },

    plugins:[new MiniCssExtraPlugin()],
};