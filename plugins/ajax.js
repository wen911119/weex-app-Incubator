
// var base_url = process.env.API_URL
const base_url = '/api'

function LOADING() {

}
export default {
    get(url, params = {}, loading = true) {
        url = base_url + url
        
        return new Promise((resolve, reject) => {
            loading && LOADING('show')

            const stream = weex.requireModule('stream')
            stream.fetch({
                method: 'GET',
                url: url,
                type: 'text'
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