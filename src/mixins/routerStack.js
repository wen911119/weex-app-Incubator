export default {
    mounted: function () {
        let self = this
        var modal = weex.requireModule('modal')
        const storage = weex.requireModule('storage')
        let routerStack
        storage.getItem('routerStack', function ({ result, data }) {
            if (result === 'success') {
                routerStack = data
            }
            let currentPath = weex.config.bundleUrl
            const currentPage = currentPath.replace(/http:\/\/.*\/(.+)\.(js|html)/, "$1")
            if (routerStack) {
                routerStack = JSON.parse(routerStack)
                if (routerStack.temp && routerStack.temp.next === currentPage && (Date.now() - routerStack.temp.ts) < 2000) {
                    // 路由前进
                    routerStack.routerStack.push(currentPage)
                    routerStack.current = {
                        index: routerStack.routerStack.length - 1,
                        path: currentPath,
                        enterType: 'go'
                    }
                    storage.setItem('routerStack', JSON.stringify(routerStack), function ({ result, data }) {
                        if (result === 'success') {
                            self.enterType = routerStack.temp.enterType
                            self.$options.ready && self.$options.ready.call(self, self.enterType)
                        }
                    })
                } else if (routerStack.temp && routerStack.temp.pre === currentPage && (Date.now() - routerStack.temp.ts) < 2000) {
                    // 路由后退
                    routerStack.routerStack.pop()
                    routerStack.current = {
                        index: routerStack.routerStack.length - 1,
                        path: currentPath,
                        enterType: 'back'
                    }
                    storage.setItem('routerStack', JSON.stringify(routerStack), function ({ result, data }) {
                        if (result === 'success') {
                            self.enterType = routerStack.temp.enterType
                            self.$options.ready && self.$options.ready.call(self, self.enterType)
                        }
                    })
                } else {
                    // 以前访问过，这次是通过地址栏输入活着刷新进来的
                    storage.setItem('routerStack', JSON.stringify({
                        routerStack: [currentPage],
                        current: {
                            index: 0,
                            path: currentPath,
                            enterType: 'new'
                        }
                    }), function ({ result, data }) {
                        if (result === 'success') {
                            self.enterType = 'new'
                            self.$options.ready && self.$options.ready.call(self, self.enterType)
                        }
                    })
                }
            } else {
                // 全新的第一个页面
                modal.toast({
                    message: '第一个页面:' + currentPage,
                    duration: 0.8
                })
                storage.setItem('routerStack', JSON.stringify({
                    routerStack: [currentPage],
                    current: {
                        index: 0,
                        path: currentPath,
                        enterType: 'new'
                    }
                }), function ({ result, data }) {
                    if (result === 'success') {
                        self.enterType = 'new'
                        self.$options.ready && self.$options.ready.call(self, self.enterType)
                    }
                })
            }
        })
    }
}