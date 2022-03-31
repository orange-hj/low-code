import Vue from 'vue'

class HttpController {
    state = '还没发送请求'
    res = ''
    err = ''
    constructor() {

    }
    sendGetRequire(url, data) {
        let httpUrl = 'https://dog.ceo/api/breeds/image/random'
        if(url) httpUrl = url
        return new Promise((res, rev) => {
            this.state = '等待响应中'
            Vue.axios.get(httpUrl)
                .then((response) => {
                    console.log(response.data)
                    this.res = response.data
                    this.state = '请求成功'
                    res(response.data)
                }).catch(function (err) {
                    console.log(err);
                    this.err = err
                    this.state = '请求失败'
                    return err
                });
        })
    }
    setNeedText(data, needText) {
        if(!needText) return data
        for (let i in data) {
            if (i == needText) {
                return data[i]
            }
        }
        return undefined
    }
    httpText(urlString) {
        if (urlString != "") {
            var reg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/;
            if (!reg.test(urlString)) {
                return false
            }
            return true
        }
        return false
    }
    ObjectToJson(data) {
        return JSON.stringify(data).toString();
    }
}




export const httpController = new HttpController()