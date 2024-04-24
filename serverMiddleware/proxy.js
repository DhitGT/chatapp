// proxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (req, res, next) {
  createProxyMiddleware({
    target: 'http://localhost:3000', // Change this to your Socket.io server URL
    changeOrigin: true,
    ws: true,
  })(req, res, next);
};
