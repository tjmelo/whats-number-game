const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        port: 3000,
        static: {
            directory: path.join(__dirname, '../dist'),
        }
    }
})