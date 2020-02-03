'use strict'

const fs = require('fs')

function streamReadTxtFile() {
  const rs = fs.createReadStream('resources/demo.txt', 'utf-8')

  rs.on('data', function(chunk) {
    console.log('流式读入数据：' + chunk)
  })

  rs.on('end', function() {
    console.log('流式读入数据：END')
  })

  rs.on('error', function(err) {
    console.log('流式读入数据：ERROR: ' + err)
  })
}

function streamWriteTxtFile() {
  const ws1 = fs.createWriteStream('resources/streamwrite1.txt', 'utf-8')
  ws1.write('使用stream写入第一行内容\n')
  ws1.write('使用stream写入第二行内容\n')
  ws1.write('使用stream写入🔚')
  ws1.end()

  const ws2 = fs.createWriteStream('resources/streamwrite2.txt', 'utf-8')
  ws2.write(new Buffer('使用stream写入二进制流\n', 'utf-8'))
  ws2.write(new Buffer('end', 'utf-8'))
  ws2.end()
}

function streamPipe() {
  const rs = fs.createReadStream('resources/streamwrite1.txt', 'utf-8')
  const ws = fs.createWriteStream('resources/streamwrite3.txt', 'utf-8')
  rs.pipe(ws) // 复制文件的过程
}

module.exports = {
  streamReadTxtFile: streamReadTxtFile,
  streamWriteTxtFile: streamWriteTxtFile,
  streamPipe: streamPipe
}

