const navigator = weex.requireModule('navigator')
export default {
    go(page, callback) {
        if (typeof window === 'object') {
            navigator.push({ url: `http://10.100.0.39:8081/${page}.html` })
        } else {
            navigator.push({ url: `http://10.100.0.39:8081/dist/${page}.js` })
        }
    },
    back() { }
}