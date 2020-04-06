// pages/str/str.js
import Model from "./model.js";
const model = new Model();
import myCache from "../../utils/myCache.js";
const cache = new myCache();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    users: [],
    offset: 0,
    limit: 20,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    this.getMore();

  },
  
  getMore(){
    model.getList({
      data: {
        offset:this.data.offset,
        limit:this.data.limit
      }
    }).then(ret=>{
        console.log(ret.data);
        //取数并缓存
        let items = this.data.users.concat(ret.data.data);
        cache.set({
          key: "users",
          data: items,
          expire: 3600
        });
        //隐藏加载框
        wx.hideLoading();
        //判断是否到最后一条
        let len = ret.data.data.length;
        if (len <= 0){
          wx.showToast({
            title: '已经没有更多用户数据了',
            icon: 'none',
            duration: 1500,
            mask: true,
          });
          return;
        }
        //给视图传值
        this.setData({
          users:items,
          offset: this.data.offset+len
        });
    }).catch(err=>{
      //console.log(err);
      //断网时触发读缓存
      //隐藏加载框
      wx.hideLoading();
      let cacheUsers = cache.get('users');
      //给视图传值
      this.setData({
        users:cacheUsers
      });


    });
  }

  
})