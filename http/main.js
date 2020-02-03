'use strict'

// 导入http模块
const http = require('http')

// 导入文件服务器模块
const fileserver = require('./fileserver')

// 创建http server, 并传入回调函数
const server = http.createServer(function (req, res) {
  // 回调函数接收req和res对象
  // 获取HTTP请求的method和url:
  console.log(req.method + ': ' + req.url)
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end('<h1>Hello World</h1>')
})

server.listen(8080)

// 启动文件服务器
fileserver.listen(8090)

console.log('服务器启动成功！')