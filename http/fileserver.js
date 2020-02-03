const url = require('url')
const path = require('path')
const fs = require('fs')
const http = require('http')

// 从命令行获取root目录，默认是当前目录
const root = path.resolve(process.argv[2] || '.')
console.log('root path:' + root)

// 创建服务器
const server = http.createServer(function(request, response) {
  const pathname = url.parse(request.url).pathname
  console.log('pathname:' + pathname)
  const filepath = path.join(root, pathname)
  console.log('filepath:' + filepath)
  // 获取文件状态
  fs.stat(filepath, function(err, stats) {
    if (!err && stats.isFile()) {
      console.log('200' + request.url)
      response.writeHead(200)
      // 将文件流导向response
      fs.createReadStream(filepath).pipe(response)
    } else {
      // 出错了或者文件不存在
      console.log('404' + request.url)
      // 发送404响应
      response.writeHead(404)
      response.end('404 Not Found')
    }
  })
})

module.exports = server
