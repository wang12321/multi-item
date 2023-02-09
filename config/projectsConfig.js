const config = {
  base: {
    name: 'FF BASE',
    entry: './src/main.js',
    devServer: {
      port: 7010, // 端口地址
      open: false, // 是否自动打开浏览器页面
      host: '0.0.0.0', // 指定使用一个 host，默认是 localhost
      https: false, // 使用https提供服务
      disableHostCheck: true
    }
  },
  projectA: {
    name: 'FF projectA',
    entry: './src/projects/projectA/main.js',
    devServer: {
      port: 7001, // 端口地址
      open: false, // 是否自动打开浏览器页面
      host: '0.0.0.0', // 指定使用一个 host，默认是 localhost
      https: false, // 使用https提供服务
      disableHostCheck: true
    }
  },
  drivingBehavior: {
    name: '驾驶行为',
    entry: './src/projects/driving-behavior/main.js',
    devServer: {
      port: 7020, // 端口地址
      open: false, // 是否自动打开浏览器页面
      host: '0.0.0.0', // 指定使用一个 host，默认是 localhost
      https: false, // 使用https提供服务
      disableHostCheck: true
    }
  },
  dbComparePc: {
    name: '数据库对比',
    entry: './src/projects/db-compare-pc/main.js',
    devServer: {
      port: 7030, // 端口地址
      open: false, // 是否自动打开浏览器页面
      host: '0.0.0.0', // 指定使用一个 host，默认是 localhost
      https: false, // 使用https提供服务
      disableHostCheck: true
    }
  }

}
module.exports = config
