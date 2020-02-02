'use strict'

const greet = require('./hello');
const {readTxtFile, readBinaryFile, readTxtFileSync, writeTxtFile, writeTxtFileSync, readFileAsync, readFileSync} = require('./file')

process.nextTick(function() {
  console.log('nextTick event!');
});

greet('hello');

// 判断执行环境
if (typeof(window) === 'undefined') {
  console.log('environment is nodejs');
} else  {
  console.log('environment is window')
}

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