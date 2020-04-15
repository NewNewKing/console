/*
 * @Description: 
 * @Version: 1.0
 * @Autor: 王兴欣
 * @Date: 2020-04-15 13:00:19
 * @LastEditors: 王兴欣
 * @LastEditTime: 2020-04-15 14:20:13
 */

const style = require('./style')
const list = ['define']

/**
 * [define 自定义输出样式]
 *
 * @param   {[Object]}  options  []
 */
function define(options) {
  let { nameStyle, msgStyle, key, split = '：' } = options
  if (list.includes(key)) {
    return this.error(`"${key}" should not be used as key`)
  }

  nameStyle = parseInputStyle(nameStyle)
  msgStyle = parseInputStyle(msgStyle)
  
  this[key] = (...arg) => {
    let message = arg.pop()
    let name = arg.pop()
    if (name) {
      name = toString(name)
      name = translate(name + split, nameStyle)
    }
    message = toString(message)
    message = translate(message, msgStyle)
    
    console.log((name || '') + message)
  }
}

/**
 * [parseInputStyle 处理用户输入的样式]
 *
 * @param   {[String | Array]}  input  [input ]
 *
 * @return  {[type]}         [return description]
 */
function parseInputStyle(input) {
  if (typeof input === 'string') {
    input = [input]
  }
  input = input.map(item => style[item]).filter(item => !!item)
  return input
}

/**
 * [translate 将文字与样式结合]
 *
 * @param   {[string]}  str    [str 文字内容]
 * @param   {[Array]}  style  [style 样式]
 *
 * @return  {[type]}         [return String]
 */
function translate(str, style) {
  const open = style.map(item => item.open)
  const close = style.map(item => item.close)
  return open.join('') + str + close.join('')
}


function toString(content){
  return typeof content === 'string' ? content : JSON.stringify(content)
}

module.exports = {
  define
}