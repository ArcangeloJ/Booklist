//npm install http-proxy-middleware --save
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/api", { target: "http://localhost:8080/",
     })
    );
};
