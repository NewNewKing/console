/*
 * @Description: 
 * @Version: 1.0
 * @Autor: 王兴欣
 * @Date: 2020-04-14 14:49:35
 * @LastEditors: 王兴欣
 * @LastEditTime: 2020-04-15 13:03:28
 */

const methods = require('./methods')


const logger = {}
Object.assign(logger, methods)

logger.define({
  key: 'log',
  nameStyle: ['brightCyan'],
  msgStyle: ['brightWhite']
})

logger.define({
  key: 'warn',
  nameStyle: ['brightCyan'],
  msgStyle: ['brightYellow']
})

logger.define({
  key: 'error',
  nameStyle: ['brightCyan'],
  msgStyle: ['brightRed']
})

module.exports = logger