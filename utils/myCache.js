//自定义缓存类, 解决 wx 缓存无有效期问题
export default class myCache{

    //设置
    set({ key, data, expire = 0 }){
        wx.setStorageSync(key, { expire, data });
    }

    //获取
    get(key){
        let dt = new Date().getTime();
        let ret = wx.getStorageSync(key);
        //永久缓存
        if (ret.expire == 0) {
            return ret.data;
        }else {
            //如果没过期
            if (dt <= ret.expire) {
                return ret.data;
            }else {
                wx.removeStorageSync(key);
                return null;
            }
        }
    }
}