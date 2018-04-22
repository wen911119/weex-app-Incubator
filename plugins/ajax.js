
// var base_url = process.env.API_URL
const base_url = '//api.ruiyun2015.com'

function LOADING() {

}
export default {
    get(url, params = {}, loading = true) {
        url = encodeURI(base_url + url)
        let type = 'text'
        if (url.indexOf('goods-list') > -1) {
            type = 'json'
        } else if (url.indexOf('get-search-goods') > -1) {
            type = 'json'
        } else if (url.indexOf('get-filter-info') > -1) {
            type = 'json'
        }
        return new Promise((resolve, reject) => {
            loading && LOADING('show')
            const stream = weex.requireModule('stream')
            stream.fetch({
                method: 'GET',
                url: url,
                type: type
            }, function (ret) {
                LOADING('hide')
                if (!ret.ok) {
                    reject(ret)
                } else {
                    // console.log(ret)
                    resolve(ret.data)
                }
            }, function (response) {
                // console.log('get in progress:' + response.length)
            })


        })
    },
    post(url, params = {}, loading = true) {
        url = base_url + url
        return new Promise((resolve, reject) => {
            loading && LOADING('show')
            axios.post(url, params).then(res => {
                LOADING('hide')
                resolve(res)
            }).catch(err => {
                LOADING('hide')
                reject(err)
            })
        })
    }
}