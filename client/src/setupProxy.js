const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    
    createProxyMiddleware('/homePage', { target: 'http://localhost:4000', changeOrigin: true }),
    createProxyMiddleware('/loginPage', { target: 'http://localhost:4000', changeOrigin: true }),
    createProxyMiddleware('/doLogin', { target: 'http://localhost:4000', changeOrigin: true }),
    createProxyMiddleware('/signupPage', { target: 'http://localhost:4000', changeOrigin: true })

  );
};
