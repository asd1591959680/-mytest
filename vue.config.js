const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias

      .set("@", resolve("./src"))
      .set("components", resolve("./src/components"))
      .set("assets", resolve("./src/assets"))
      .set("views", resolve("./src/views"))
      .set("network", resolve("./src/network"));
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://test.thankwork.cn:9000",
        // 允许跨域
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
