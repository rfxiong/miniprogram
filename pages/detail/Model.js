//导入config文件
import {Config} from '../../utils/Config.js';
//导入请求类
import Http from '../../utils/Http.js';

export default class Model extends Http {
    getInfo(id){
        wx.showLoading({
            title: "正在加载中...",
            mask: true,
        });
        let url = Config.courses_url+'/'+id;
        let data = {id};
        return this.httpRequest({url,data});
    }
}
