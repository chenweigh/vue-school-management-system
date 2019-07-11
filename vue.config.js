module.exports = {
  //部署应用包时的基本 URL, `/livecourse/`(https://www.baidu.com/livecourse/), `/` (https://www.baidu.com/)
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",

  //当运行 vue-cli-service build --no-clean(可选) 时生成的生产环境构建文件的目录, default:'dist'
  outputDir: "dist",

  //放置静态资源(js, css, img, fonts)的目录, default:''
  assetsDir: "",

  //指定生成的 `index.html` 的输出路径(相对于outputDir)。default:'index.html'
  indexPath: "index.html",

  //本地服务器代理配置
  devServer: {
    host: "develop.cxy61.com",
    port: 8080,
    https: false,
    open: false,

    //反向代理配置
    proxy: {
      "/program_face2face": {
        target: "https://app.bcjiaoyu.com",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^program_face2face": ""
        }
      },
      "/server": {
        target: "https://app.bcjiaoyu.com"
      }
    }
  }
};
