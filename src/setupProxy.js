const proxy = require('http-proxy-middleware').createProxyMiddleware;

module.exports = function (app) {
    app.use(proxy(`/auth/**`, { target: 'http://localhost:8080' }));
    app.use(proxy(`/comics/**`, {target: 'http://localhost:8080'}));
    app.use(proxy(`/details/**`, {target: 'http://localhost:8080'}));
};
