var webpack = require('webpack');

module.exports = {
    entry: './client/main.js',
    output: {
        path: __dirname + '/public/build/',
        publicPath: 'build/',
        filename: "main.bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.css$/,
                loader: "style-loader!style-loader!autoprefixer-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!autoprefixer-loader!less-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test   :/\.jsx?$/,
                exclude: [/node_modules/, /public/],
                loader :'babel-loader',
                query  :{
                    presets:['react','es2015']
                }
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    }
};