import Model from "./model";
const model = new Model();

// pages/list/list.js
Page({

  data: {
    items: [],
    offset: 0,
    limit: 10,
  },

  onLoad(options){
    //console.log(options);
    model.getList({
      id: options.id,
      obj: this
    });
  },
})