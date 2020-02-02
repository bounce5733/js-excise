'use strict'

const fs = require('fs');

/*
异步还是同步

在fs模块中，提供同步方法是为了方便使用。那我们到底是应该用异步方法还是同步方法呢？

由于Node环境执行的JavaScript代码是服务器端代码，所以，绝大部分需要在服务器运行期反复执行业务逻辑的代码，必须使用异步代码，否则，同步代码在执行时期，服务器将停止响应，因为JavaScript只有一个执行线程。

服务器启动时如果需要读取配置文件，或者结束时需要写入到状态文件时，可以使用同步代码，因为这些代码只在启动和结束时执行一次，不影响服务器正常运行时的异步执行。
*/

// 读取文本文件
function readTxtFile() {
  fs.readFile('resources/demo.txt', 'utf-8', function(err, data) {
    if (err) {
      console.log(err)
    } else {
      console.log(data)
    }
  });
}

// 读取二进制文件
function readBinaryFile() {
  fs.readFile('resources/plant-.png', function(err, data) { // data为 Buffer对象就是一个包含零个或任意个字节的数组（注意和Array不同)
    if (err) {
      console.log(err)
    } else {
      console.log(data)
      console.log(data.length + ' bytes')
      const str = data.toString('utf-8')
      // console.log('文本格式：' + str)
      const buff = Buffer.from(str, 'utf-8')
      console.log('二进制格式长度：' + buff.length + ' bytes')
    }
  })
}

// 同步文件读取
function readTxtFileSync() {
  try {
    const str = fs.readFileSync('resources/demo.txt', 'utf-8')
    console.log('同步读取文件返回内容：' + str)
  } catch (err) {
    console.log(err)
  }
}

// 写文件
/*
writeFile()的参数依次为文件名、数据和回调函数。如果传入的数据是String，默认按UTF-8编码写入文本文件，如果传入的参数是Buffer，则写入的是二进制文件。回调函数由于只关心成功与否，因此只需要一个err参数
*/
function writeTxtFile() {
  const str = '写入文件测试'
  fs.writeFile('resources/output.txt', str, function(err) {
    if (err) {
      console.log('写入文件出错' + err)
    } else {
      console.log('成功写入文件')
    }
  })
}

// 同步写文件
function writeTxtFileSync() {
  const str = '同步写入文件测试'
  try {
    fs.writeFileSync('resources/outputsync.txt', str)
  } catch(err) {
    console.log('同步写入文件出错：' + err)
  }
}

// 异步读取文件信息
function readFileAsync() {
  fs.stat('resources/outputsync.txt', function(err, stat) {
    if (err) {
      console.log('异步读入文件出错：' + err)
    } else {
      console.log('is file:' + stat.isFile())
      console.log('is directory:' + stat.isDirectory())
      if (stat.isFile()) {
        console.log('file size:' + stat.size)
        // 创建时间
        console.log('create time:' + stat.birthtime)
        // 修改时间，Date对象
        console.log('modify time:' + stat.mtime)
      }
    }
  })
}

// 同步读取文件信息
function readFileSync() {
  try {
    const obj = fs.statSync('resources/outputsync.txt')
    console.log('同步读入文件信息成功，文件内容大小：' + obj.size)
  } catch(err) {
    console.log('同步读取文件出错：' + err)
  }

}

module.exports = {
  readTxtFile: readTxtFile,
  readBinaryFile: readBinaryFile,
  readTxtFileSync: readTxtFileSync,
  writeTxtFile: writeTxtFile,
  writeTxtFileSync: writeTxtFileSync,
  readFileAsync: readFileAsync,
  readFileSync: readFileSync
}