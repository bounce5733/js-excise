'use strict'

const {readTxtFile, readBinaryFile, readTxtFileSync, writeTxtFile, writeTxtFileSync, readFileAsync, readFileSync} = require('./file')

// 读取文本文件
readTxtFile()

// 读取图片
readBinaryFile()

// 同步读取文件
readTxtFileSync()

// 异步写入文件
writeTxtFile()

// 同步写入文件
writeTxtFileSync()

// 异步读取文件信息
readFileAsync()

// 同步读入文件信息
readFileSync()

setTimeout(function() {
  console.log('主程序结束！')
}, 5000)