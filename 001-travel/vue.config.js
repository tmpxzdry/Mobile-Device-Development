var path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    chainWebpack: config => {
        config.resolve.alias.set('@style', resolve('src/style'))
    },
    //跨域配置
    //webpack-dev-server
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3008',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}