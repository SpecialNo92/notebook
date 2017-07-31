const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: ['./src/index.jsx'],
    output: {
        path: __dirname + '/assets/',
        publicPath: '/assets/',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: "./public/",
        port: 8080
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(['css-loader'])
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
};