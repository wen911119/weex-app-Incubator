const fs = require("fs")
const path = require("path")
const { COPYFILE_EXCL } = fs.constants
const apps = process.argv.slice(2)

for (let app of apps) {
    console.log(`generate new app : ${app}`)
    fs.mkdir('./src/Apps/' + app, function (err) {
        if (err) {
            console.log(`目录${app}已存在`)
        }
        copy('./template', './src/Apps/' + app)
    })
}

function copy(srcDir, descDir) {
    fs.readdir(srcDir, function (err, files) {
        files.forEach(function (file) {
            const src = path.join(srcDir, file)
            const desc = path.join(descDir, file)
            const stat = fs.statSync(src)
            if (stat.isFile()) {
                fs.copyFile(src, desc, COPYFILE_EXCL, function (err) {
                    if (err) {
                        console.log(`文件${desc}已经存在,不会覆盖！`)
                    }
                })
            } else if (stat.isDirectory()) {
                // 创建目录
                fs.mkdir(desc, function (err) {
                    if (err) {
                        console.log(`目录${desc}已经存在`)
                    }
                    copy(src, desc)
                })
            }
        })
    })
}

