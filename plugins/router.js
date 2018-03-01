const navigator = weex.requireModule('navigator')
// const baseUrl = 'http://192.168.31.10:8081'
const baseUrl = 'http://10.100.0.39:8081'
export default {
    go(page, callback) {
        if (typeof window === 'object') {
            localStorage.setItem('_micro_apps_is_push', 'yes')
            navigator.push({ url: `${baseUrl}/${page}.html` })
        } else {
            navigator.push({ url: `${baseUrl}/dist/${page}.js` })
        }

    },
    back() {
        navigator.pop()
    },
    push(page) {
        if (typeof window === 'object') {
            // web 环境
            if (window.self != window.top) {
                // 在 iframe 中
                window.parent.postMessage(page, '*')
            }else if(false){
                // 小程序webview
            }else {
                // 普通web
                navigator.push({ url: `${baseUrl}/${page}.html` })
            }
        }else{
            // weex 内
            navigator.push({ url: `${baseUrl}/dist/${page}.js` })
        }

    }
}