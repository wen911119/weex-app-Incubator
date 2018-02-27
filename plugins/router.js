const navigator = weex.requireModule('navigator')
const baseUrl = 'http://192.168.31.10:8081'
export default {
    go(page, callback) {
        const storage = weex.requireModule('storage')
        let routerStack
        storage.getItem('routerStack', function ({ result, data }) {
            if (result === 'success') {
                routerStack = JSON.parse(data)
                routerStack.temp = {
                    next: page,
                    enterType: 'go',
                    ts: Date.now()
                }
                storage.setItem('routerStack', JSON.stringify(routerStack), function ({ result, data }) {
                    if (result === 'success') {
                        if (typeof window === 'object') {
                            navigator.push({ url: `${baseUrl}/${page}.html` })
                        } else {
                            navigator.push({ url: `${baseUrl}/dist/${page}.js` },function(event){
                                var modal = weex.requireModule('modal')
                                modal.toast({ message: 'callback: ' + event, duration: 3.8 })
                            })
                        }
                    }
                })

            }
        })
    },
    back() {
        const storage = weex.requireModule('storage')
        let routerStack
        storage.getItem('routerStack', function ({ result, data }) {
            if (result === 'success') {
                routerStack = JSON.parse(data)
                routerStack.temp = {
                    pre: routerStack.routerStack[routerStack.current.index - 1],
                    enterType: 'back',
                    ts: Date.now()
                }
                storage.setItem('routerStack', JSON.stringify(routerStack), function ({ result, data }) {
                    if (result === 'success') {
                        navigator.pop({animated:"true"}, function(event){
                            var modal = weex.requireModule('modal')
                            modal.toast({ message: 'callback: ' + event })
                        })
                    }
                })
            }
        })
    }
}