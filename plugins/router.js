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
        document.getElementById("apps-box").className = 'app-' + page
        history.pushState({ a: Date.now() }, '', page + '.html');
        const pagejs = document.getElementById('_app_script_' + page)
        if (pagejs) {
            // 已经存在了
        } else {
            var script = document.createElement('script');
            script.src = '/' + page + '.web.js';
            script.id = '_app_script_' + page
            document.body.appendChild(script);
        }
    }
}