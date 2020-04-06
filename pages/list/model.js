//导入config文件
import {Config} from '../../utils/Config.js';
//导入请求类
import Http from '../../utils/Http.js';

export default class Model extends Http {
    getList({id=0,obj}){
        wx.showLoading({
            title: "正在加载中...",
            mask: true,
        });
        let url = Config.courses_url;
        let data = {
            offset: obj.data.offset,
            limit: obj.data.limit,
            id: id
        }
        return this.httpRequest({url,data})
        .then(ret=>{
            wx.hideLoading();
            obj.setData({
                items: obj.data.items.concat(ret.data.data),
                offset: obj.data.offset+ret.data.data.length
            });
        }).catch(err=>{
            console.log(error);
        });
    }
}