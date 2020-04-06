//app.js
import Http from "./utils/Http.js";
let http = new Http();

App({
  onLaunch: function () {
    //获取登录的 code
    wx.login({
      timeout:10000,
      success: (result)=>{
        //得到 code ，有效期5分钟
        //{"session_key":"JDJOLVcK7J4vA6qSgKEZqg==","openid":"oVJss5KeTioYyiXPmfSHdO_VsHpw"}
        let code = result.code;
        http.httpRequest({
          url: "http://laravel.test/api/wxlogin",
          data: {code}
        })
        .then(ret=>{
          console.log(ret.data);
          let openid = ret.data.openid;
          wx.setStorageSync('openid', openid);
        })
        .catch(err=>{
          console.log(err);
        });
      }
    });
  },
  
  
})