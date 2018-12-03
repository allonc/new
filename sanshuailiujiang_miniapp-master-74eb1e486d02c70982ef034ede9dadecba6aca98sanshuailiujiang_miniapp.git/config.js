
/**
 * 小程序配置文件
 */

// 测试
var domain = "https://bobo.bc2c.cn"; //测试
//var imgUrl = "https://bobo.bc2c.cn/static/xcx_image";
var imgUrl = "../../images/"
var secretKey = "168A87D8697FE6A3"; //api密钥

// 正式
// var domain = "https://api.bobolaile.com"; //测试
// var imgUrl = "https://api.bobolaile.com/static/xcx_image";
// var secretKey = "168A87D8697FE6A3"; //api密钥

var apiUrl = domain + '/agent/'; //api接口地址
//var qiniuUrl = 'https://resource.hitui.com/'; //七牛文件预览地址

var config = {
  version: "1.0.1", //版本号
  domain: domain,
  secretKey: secretKey,
  apiUrl: apiUrl,
  imgUrl: imgUrl
};

module.exports = config