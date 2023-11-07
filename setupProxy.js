// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//   app.use('/api', createProxyMiddleware({
//     target: 'http://10.32.17.199:7000', // ระบุ URL ของเซิร์ฟเวอร์ local ของคุณ
//     changeOrigin: true,
//     onProxyReq: (proxyReq, req, res) => {
//       console.log(`Proxy Request to: ${req.path}`);
//     },
//     onProxyRes: (proxyRes, req, res) => {
//       console.log(`Proxy Response from: ${req.path}`);
//     },
//   }));
// };