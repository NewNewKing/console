/*
 * @Description: 
 * @Version: 1.0
 * @Autor: 王兴欣
 * @Date: 2020-04-15 13:07:30
 * @LastEditors: 王兴欣
 * @LastEditTime: 2020-04-15 14:19:44
 */

const logger = require('../index')

logger.log('this is log name', {a: 1, b:2})

logger.warn('this is a warn name', 'this is warn message')

logger.warn('FBI WARNING')

logger.error('this is a error name', 'this is error message')

logger.error('this is error message')

logger.define({
  key: 'define'
})