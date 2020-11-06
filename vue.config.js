module.exports = {
  lintOnSave:false,
  publicPath:'/',
  // 别名
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'views':'@/views',
      }
    }
  }
}

