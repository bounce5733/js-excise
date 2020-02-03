'use strict'

const crypto = require('crypto')

const hash = crypto.createHash('md5')

hash.update('hello nodejs')
hash.update('你好 nodejs')

console.log(hash.digest('hex'))