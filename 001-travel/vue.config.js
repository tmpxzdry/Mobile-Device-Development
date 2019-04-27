var path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    baseUrl: './',
    outputDir: 'dist',
    lintOnSave: true,
    runtimeCompiler: true, //关键点在这  
    // 调整内部的 webpack 配置。
    // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/webpack.md
    chainWebpack: () => {},
    configureWebpack: () => {},

    chainWebpack: config => {
        config.resolve.alias
            .set('@style', resolve('src/style'))
            .set('@gallary', resolve('src/components/Gallary'))
    },
    //跨域配置
    //webpack-dev-server
    devServer: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:3008',
                // changeOrigin: true,
                // ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}