const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'):

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel loader'
                }
            }
        ]
    },
    plugin: {
        new HtmlWebpackplugin({
            template: './src/index.html'
        })
    }
}