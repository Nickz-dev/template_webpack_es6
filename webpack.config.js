const path = require('path')
const  HTMLPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.[chunkhash].js',
        path: path.resolve(__dirname, 'public'),
        sourceMapFilename: "[name].js.map"
    },
    devServer: {
        port: 3000
    },
    devtool: "source-map",
    plugins: [
        new HTMLPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ]
}