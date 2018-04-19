const navigator = weex.requireModule('navigator')
const storage = weex.requireModule('storage')
const baseUrl = weex.config.bundleUrl.replace(/(.+\/\/)(.+?)\/.+/, "$1$2")
export default {
    back() {
        if (typeof window === 'object') {
            // web 环境
            if (window.self != window.top) {
                // 在 iframe 中
                window.parent.postMessage('_back_', '*')
            } else if (false) {
                // 小程序webview
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
        data._target_ = page
        storage.setItem('_navigator_data_', JSON.stringify(data), event => {
            if (event.result === 'success') {
                // 设置成功
                if (typeof window === 'object') {
                    // web 环境
                    if (window.self != window.top) {
                        // 在 iframe 中
                        window.parent.postMessage(page, '*')
                    } else if (false) {
                        // 小程序webview
                    } else {
                        // 普通web
                        // navigator.push({ url: `${baseUrl}/${page}.html` })
                        navigator.push({ url: `/${page}.html` })
                    }
                } else {
                    // weex 内
                    navigator.push({ url: `${baseUrl}/dist/${page}.js` })
                }
            }
        })
    }
}