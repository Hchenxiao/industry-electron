const path = require('path')
const StylelintPlugin = require('stylelint-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/',
  devServer: {
    port: '5000',
    proxy: {
      '/api': {
        target: process.env.BASE_URL,
        changeOrigin: true,
        ws: true
      }
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src/renderer'))
  },
  pages: {
    index: {
      entry: 'src/renderer/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'vue-cli-electron',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
    // loader: 'src/loader/main.js' // 多页loader页
  },
  configureWebpack: config => {
    const plugins = []
    if (process.env.NODE_ENV === 'development') {
      // style样式检测
      plugins.push(
        new StylelintPlugin({
          files: ['src/**/*.vue', 'src/assets/**/*.scss'],
          fix: true // 打开自动修复（谨慎使用！注意上面的配置不要加入js或html文件，会发生问题，js文件请手动修复）
        })
      )
    }
    config.plugins = [...config.plugins, ...plugins]
  },
  pluginOptions: {
    electronBuilder: {
      mainProcessFile: 'src/main/index.ts', // 主进程入口文件
      mainProcessWatch: ['src/main'] // 检测主进程文件在更改时将重新编译主进程并重新启动
    },
    // builderOptions 打包配置 (参考文档：https://www.electron.build/configuration/configuration)
    builderOptions: {
      appId: process.env.VUE_APP_APPID,
      productName: process.env.VUE_APP_PRODUCTNAME,
      copyright: 'Copyright',
      extraMetadata: {
        name: process.env.VUE_APP_APPID.split('.').pop(),
        version: process.env.VUE_APP_VERSION
      },
      asar: true,
      directories: {
        output: 'dist_electron',
        buildResources: 'build',
        app: 'dist_electron/bundled'
      },
      files: [
        {
          filter: ['**']
        }
      ],
      extends: null,
      electronVersion: '11.3.0',
      extraResources: [],
      electronDownload: {
        mirror: 'https://npm.taobao.org/mirrors/electron/' // 下载镜像
      },
      nsis: {
        oneClick: false, // 一键安装
        perMachine: true,
        allowToChangeInstallationDirectory: true,
        warningsAsErrors: false,
        allowElevation: false,
        createDesktopShortcut: true,
        createStartMenuShortcut: true
      },
      dmg: {
        contents: [
          {
            type: 'link',
            path: '/Applications',
            x: 410,
            y: 150
          },
          {
            type: 'file',
            x: 130,
            y: 150
          }
        ]
      },
      mac: {
        icon: 'public/icons/icon.icns',
        artifactName: '${productName}-v${version}-mac.${ext}'
      },
      win: {
        target: 'nsis',
        icon: 'public/icons/icon.ico',
        requestedExecutionLevel: 'highestAvailable',
        artifactName: '${productName}-v${version}-win32-setup.${ext}'
      },
      linux: {
        icon: 'public/icons',
        artifactName: '${productName}-v${version}-linux.${ext}'
      },
      publish: {
        provider: 'generic',
        url: 'http://127.0.0.1'
      }
    }
  }
}
