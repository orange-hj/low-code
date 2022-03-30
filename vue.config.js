const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    //别名
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'img': '@/assets/img',
                'views': '@/views',
                'utils': '@/utils',
            }
        }
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080/',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': '/mock'
                }
            }
        }
    },
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "@/assets/style/common.scss";`,
            }
        }
    }
}