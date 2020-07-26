process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
  devServer: {
    // host: 'diplom-localhost.local',
    host: '192.168.0.129',
    disableHostCheck: true
  },
  css: {
    loaderOptions: {
      // pass options to sass-loader
      // @/ is an alias to src/
      // so this assumes you have a file named `src/variables.sass`
      // Note: this option is named as "data" in sass-loader v7
      // sass: {
      //   prependData: '@import "~@/variables.sass"'
      // },
      // by default the `sass` option will apply to both syntaxes
      // because `scss` syntax is also processed by sass-loader underlyingly
      // but when configuring the `data` option
      // `scss` syntax requires an semicolon at the end of a statement, while `sass` syntax requires none
      // in that case, we can target the `scss` syntax separately using the `scss` option
      scss: {
        prependData: '@import "~@/assets/scss/style.scss";'
      }
    }
  }
}
