module.exports = {
  devServer: {
    port: 8000,
    proxy: {
      // 代理转发，解决跨域请求问题
      "/api": {
        target: "http://localhost:8081/", // 被代理的地址（真实地址）
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/", // 路径代替，用 /api 代替 /
        },
      },
    },
  },
};
