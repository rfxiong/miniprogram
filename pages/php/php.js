//导入模型
import Model from './model.js';
let model = new Model();
import myCache from '../../utils/myCache.js';
const cache = new myCache();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    course:[
      {id:1,name:'就业课'},
      {id:2,name:'提升课'},
      {id:3,name:'免费课'},
      {id:4,name:'分类课'},
    ],
    offset:0,
    limit:3,
    items:[]
  },

  onLoad(options) {
    this.getMore();
  },
  //加载更多
  getMore(){
    model.getList({
      offset: this.data.offset,
      limit: this.data.limit
    })
    .then(ret =>{
      //成功后隐藏加载框
      wx.hideLoading();
      //判断是否最后一条数据
      let len = ret.data.data.length;
      if (len <= 0){
        //提示没有数据了，并返回
        wx.showToast({
          title: '没有更多的课程了',
          icon: 'none',
          duration: 1500,
          mask: true,
        });
        return;
      }
      //缓存数据
      let cacheData = this.data.items.concat(ret.data.data);
      cache.set({
        key: "name",
        data: cacheData,
        expire: 3600
      });
      //给视图传递数据
      this.setData({
        items: cacheData,
        offset: this.data.limit+len
      });
    })
    .catch(err =>{
      ///成功后隐藏加载框
      wx.hideLoading();
      //获取缓存数据
      let cacheData = cache.get('name');
      //给视图传递数据
      this.setData({
        items: cacheData,
      });
      console.log(err);
    });
  }

  
})