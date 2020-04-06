// 请求类
export default class Http {
     //发起请求 返回的时一个 Promise 对象
     httpRequest({url,data={},method="GET"}){
         return new Promise((resolve,reject)=>{
             wx.request({
                 url,
                 data,
                 method:"GET",
                 success:ret=>{
                     resolve(ret);
                },
                 fail:err=>{
                     reject(err);
                }
             });
         });
     }
 }
