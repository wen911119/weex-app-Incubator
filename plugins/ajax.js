import axios from 'axios'
// var base_url = process.env.API_URL
const base_url = '/api'

function LOADING() {

}
export default {
    get(url, params = {}, loading = true) {
        url = base_url + url
        return new Promise((resolve, reject) => {
            loading && LOADING('show')
            axios.get(url, { params }).then(res => {
                LOADING('hide')
                if (res.status === 200) {
                    resolve(res.data)
                } else {
                    reject(res.statusText)
                }
            }).catch(err => {
                LOADING('hide')
                reject(err)
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