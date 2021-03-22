const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware(['/api'], {
      // 后端服务
      target: 'http://172.0.0.0:8031', // 开发环境
      changeOrigin: true,
      ws: true,
    })
  )
}
