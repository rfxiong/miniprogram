// pages/detail/detail.js
import Model from "./Model.js";
const model = new Model();

Page({

  data: {
    info: {},
  },

  onLoad: function (options) {
    console.log(options);
    model.getInfo(options.id).then(res=>{
      wx.hideLoading();
      console.log(res);
      this.setData({
        info: res.data.data
      })
    })
  },

 
})