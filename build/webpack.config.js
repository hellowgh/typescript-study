const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './index.ts',
    output: {
        filename: 'app.js' // 配置文件里的路径好像都是以package.json所在目录开始算的
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['ts-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
}