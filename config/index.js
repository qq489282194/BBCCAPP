'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // assetsSubDirectory: 'static',
    // assetsPublicPath: '/',
    // proxyTable: {},

    // Paths
 
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/bbc-information':{
        // target:'http://user.meibbc.com/',
        // target:'http://napp.meibbc.com/dev/',
        // target:'http://192.168.0.41:8081/dev/',
        // test 以下
        // target:'http://nfz.meibbc.com',
        target:'http://papp.meibbc.com/',
        changeOrigin:true,
        pathRewrite:{
          '^/bbc-information': '/bbc-information'
        }
      },
      '/bbc':{
        // target:'http://napp.meibbc.com/',
        // 正式
        // target:'http://user.meibbc.com/',
        // 预发布
        // target:'http://papp.meibbc.com/',
        // 测试
        target:'http://testuser.meibbc.com/dev/',
        // target:'http://192.168.0.41:8081/dev/',
        // test 以下
        // target:'http://120.79.144.227:8081/dev/',
        changeOrigin:true,
        pathRewrite:{
          '^/bbc': ''
        }
      },
      '/meibbcapp':{
        // 以下test
        // target:'http://napp.meibbc.com/',
        // 正式
        // 预发布
        // target:'http://papp.meibbc.com/',
        // 测试
        target:'http://tapp.meibbc.com/',
        // target:'http://appmini.meibbc.com/',
        changeOrigin:true,
        pathRewrite:{
          '^/meibbcapp':''
        }
      },
      '/message':{
        // 以下test
        // target:'http://napp.meibbc.com/',
        // 正式
        // 预发布
        // target:'http://papp.meibbc.com/',
        // 测试
        target:'http://tapp.meibbc.com/',
        // target:'http://appmini.meibbc.com/',
        // target:'http://39.108.143.243:8787',
        changeOrigin:true,
        pathRewrite:{
          '^/message':''
        }
      },


      '/bbc-tapp':{
        // 以下test
        // target:'http://tapp.meibbc.com/',
        target:'http://appmini.meibbc.com/',
        changeOrigin:true,
        pathRewrite:{
          '^/bbc-tapp':''
        }
      },


      '/cmi-other':{
        // test以下
        // target:'http://120.79.144.227:8050/',
        // target:'http://papp.meibbc.com/',
        // target:'http://appmini.meibbc.com/',
        // 预发布
        // target:'http://user.meibbc.com/',
        // 测试
        target:'http://testuser.meibbc.com/',
        changeOrigin:true,
        pathRewrite:{
          '^/cmi-other':''
        }
      },      
      '/api':{
        target: 'http://192.168.0.26:8081/api',
        changeOrigin: true,
        pathRewrite:{
          '^/api': ''
        }
      },
    },

    // Various Dev Server settings
    // host: '192.168.0.55', // can be overwritten by process.env.HOST
    // host: '192.168.0.113', // can be overwritten by process.env.HOST
    host: '192.168.0.96', // can be overwritten by process.env.HOST
    // host: 'localhost', // can be overwritten by process.env.HOST
    port: "2001", // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,
    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../bbc-personal/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../bbc-personal'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/bbc-personal/',
    // assetsPublicPath: './',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
