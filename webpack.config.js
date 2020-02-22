const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    devtool: "eval",
    resolve: {
        alias: {
            "~assets": path.resolve(__dirname, "assets"),
        },
    },
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.coffee$/,
                use: [ 'coffee-loader' ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: ['babel-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',


                ],
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
               test: /\.svg$/,
               loader: 'vue-svg-loader', // `vue-svg` for webpack 1.x
            },
        ]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ]
};
