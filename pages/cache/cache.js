// pages/cache/cache.js
import myCache from "../../utils/myCache";
const cache = new myCache();

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    cache.set({
      key: 'name',
      data: 'zhangSan',
      expire: 0
    });

  },

 
})