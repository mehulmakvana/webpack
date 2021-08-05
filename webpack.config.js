const path = require('path');
const MiniCssExtraPlugin = require('mini-css-extract-plugin');

module.exports = {
    output: {

        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
        // publicPath: '/'

    },

    devServer: {
        port: 8080,
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
            apiUrl: 'http://localhost:8080'
        })
    },

    plugins:[new MiniCssExtraPlugin()],
};