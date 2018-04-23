const navigator = weex.requireModule('navigator')
const storage = weex.requireModule('storage')
import { Base64 } from 'js-base64'
const baseUrl = weex.config.bundleUrl.replace(/(.+)\/.+\.j.+/, "$1")
export default {
    back() {
        if (typeof window === 'object') {
            // web 环境
            if (window.self != window.top) {
                // 在 iframe 中
                window.parent.postMessage('_back_', '*')
            } else if (weex.config.env.userAgent.indexOf('MicroMessenger') > -1) {
                // 小程序webview
                wx.miniProgram.navigateBack()
            } else {
                // 普通web
                navigator.pop()
            }
        } else {
            // weex 内
            navigator.pop()
        }
    },
    push(page, data = {}) {
        const dataBase64 = Base64.encode(JSON.stringify(data))
        if (typeof window === 'object') {
            // web 环境
            if (window.self != window.top) {
                // 在 iframe 中
                window.parent.postMessage(`${page}?init=${dataBase64}`, '*')
            } else if (weex.config.env.userAgent.indexOf('MicroMessenger') > -1) {
                // 小程序webview
                localStorage.setItem(`${page}_init_info`, JSON.stringify(data))
                wx.miniProgram.navigateTo({
                    url: `/pages/${page}/${page}`
                })
            } else {
                // 普通web
                // navigator.push({ url: `${baseUrl}/${page}.html` })
                navigator.push({ url: `/${page}.html?init=${dataBase64}` })
            }
        } else {
            // weex 内
            navigator.push({ url: `${baseUrl}/${page}.js?init=${dataBase64}` })
        }
    }
}