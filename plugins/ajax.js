
// var base_url = process.env.API_URL
const base_url = '/api'

function LOADING() {

}
export default {
    get(url, params = {}, loading = true) {
        url = base_url + url
        let type = 'text'
        if (url.indexOf('getDvertInfo') > -1) {
            type = 'text'
        } else if (url.indexOf('GetPlateContent') > -1) {
            type = 'text'
        } else if (url.indexOf('goods-list') > -1) {
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
                    reject(ret.statusText)
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