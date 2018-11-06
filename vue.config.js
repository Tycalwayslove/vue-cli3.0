var path = require("path");
function resolve(dir) {
  console.log(__dirname);
  return path.join(__dirname, dir);
}
module.exports = {
  devServer: {
    port: 9187,
    host: "localhost",
    open: true,
    proxy: null
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@common", resolve("src/common"))
      .set("@components", resolve("src/components"))
      .set("@pages", resolve("src/pages"));
  }
};
