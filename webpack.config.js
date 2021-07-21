const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// App directory
const appDirectory = fs.realpathSync(process.cwd());

// Gets absolute path of file within app directory
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

// Host
const host = process.env.HOST || 'localhost';

// Required for babel-preset-react-app
process.env.NODE_ENV = 'development';

module.exports = {
    mode: process.env.NODE_ENV,
    devtool: "source-map",
    entry: resolveAppPath('src/index.js'),
    output: {
        filename: `[name].js`,
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        hot: true,
        port: 9010,
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: resolveAppPath('static/index.html')
        }),
    ],
    module: {
        rules: [
            { test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'] },
            { test: /\.(png|jpeg|jpg|gif|svg|mp4|tiff|wav)$/, use: 'file-loader' },
            { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, use: 'url?limit=10000&mimetype=application/font-woff' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: 'url?limit=10000&mimetype=application/octet-stream' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: 'file'},
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: 'url?limit=10000&mimetype=image/svg+xml' }
        ],
    },
}