const {
  override,
  fixBabelImports,
  addLessLoader,
  addBabelPlugins,
  overrideDevServer,
  addWebpackModuleRule,
  addWebpackPlugin,
  addWebpackAlias,
  useBabelRc,
  addPostcssPlugins,
  // useEslintRc,
} = require('customize-cra')
const webpack = require('webpack')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { getThemeVariables } = require('antd/dist/theme')
const path = require('path')
const isProd = process.env.NODE_ENV === 'production'
const isMobile = process.env.REACT_APP_MOBILE === 'true'

// 添加tsconfig path插件
const addTsConfigPath = () => (config) => {
  config.resolve.plugins.push(
    new TsconfigPathsPlugin({
      configFile: path.resolve('./tsconfig.json'),
    })
  )
  return config
}

// 关闭mapSource
const rewiredMap = () => (config) => {
  if (isProd) {
    // 关闭sourceMap
    config.devtool = false
  }
  return config
}

/** 禁用noModuleScopePlugin
 * 参考 https://addonedn.github.io/2018/05/15/create-react-app%E7%9A%84webpack%E9%85%8D%E7%BD%AE%E9%98%85%E8%AF%BB/#resolve
 */
const noModuleScopePlugin = () => (config) => {
  config.resolve.plugins = config.resolve.plugins.filter((plugin) => {
    return !(plugin instanceof ModuleScopePlugin)
  })
  return config
}

module.exports = {
  webpack: override(
    // useEslintRc(),
    // 允许使用.babelrc文件进行Babel配置
    useBabelRc(),
    addTsConfigPath(),
    noModuleScopePlugin(),
    // 添加WatchIgnorePlugin插件
    addWebpackPlugin(new webpack.WatchIgnorePlugin([/css\.d\.ts$/])),
    addWebpackPlugin(new AntdDayjsWebpackPlugin()),
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
        // modifyVars: { '@primary-color': '#1DA57A' },
        // 参考 https://ant.design/docs/react/customize-theme
        modifyVars: getThemeVariables({
          dark: true, // 开启暗黑模式
          compact: true, // 开启紧凑模式
        }),
      },
    }),
    // 按需加载
    fixBabelImports(
      'import',
      isMobile
        ? {
            libraryName: 'antd-mobile',
            libraryDirectory: 'lib',
            style: 'css',
            // style: true, // 会加载 less 文件
          }
        : {
            libraryName: 'antd',
            libraryDirectory: 'lib',
            // style: "css",
            style: true, // 会加载 less 文件
          }
    ),
    addBabelPlugins([
      'babel-plugin-styled-components',
      {
        pure: true,
        displayName: true,
      },
    ]),

    isMobile &&
      addPostcssPlugins([
        require('postcss-pxtorem')({
          //结果为：设计稿元素尺寸/16，比如元素宽320px,最终页面会换算成 20rem
          rootValue: 16,
          // 哪些需要进行px转rem
          propList: ['*'],
          // 排除哪些开头的如 .weui-button 等等
          // "selectorBlackList": ['weui-'],
          // 最小转换，如低于 4px的不会进行转成rem
          // "minPixelValue": 4
        }),
      ]),
    addBabelPlugins(['react-hot-loader/babel']),
    addWebpackAlias({
      'react-dom': '@hot-loader/react-dom',
    }),
    rewiredMap(),
    isProd &&
      addWebpackPlugin(
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              drop_console: true,
            },
            output: {
              comments: false,
            },
          },
        })
      )
  ),
  devServer: overrideDevServer((config) => {
    return {
      ...config,
    }
  }),
}
