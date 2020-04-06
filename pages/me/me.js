import Http from '../../utils/Http.js';
const http = new Http();
// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    http.httpRequest({
      url: 'http://laravel.test/api/courses',
      data: {
        offset:0,
        limit:10
      }
    }).then(ret=>{
      items: ret.data.data
    });
  },

})