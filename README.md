# console

similar to [colors.js](https://github.com/Marak/colors.js)

colors and styles are same as colors.js except `extras`



## Installation

```
npm install @wangxingxin/console
```



## Usage

```javascript 
const logger = require('@wangxingxin/console')

logger.log('log.name', 'log.message') // log.name：log.message
logger.warn('FBI WARNING!')		// FBI WARNING!
logger.error('error.name', {a: 'something wrong'})
// error.name：{"a":"something wrong"}
```



## Custom

```javascript
logger.define({
  key: 'custom1',
  nameStyle: ['bold', 'underline', 'brightRed'],
  msgStyle: ['brightWhite'],
 	split: '：'
})

logger.define({
  key: 'custom2',
  nameStyle: ['white', 'italic'],
  msgStyle: ['green'],
  split: '----'
})
```

 And then  you can use `logger.custom1(name, message)` or `logger.custom2(name, message)`

you can also use one param `logger.custom1(message)`



## colors and styles

copy from colors.js

### text colors

- black
- red
- green
- yellow
- blue
- magenta
- cyan
- white
- gray
- grey

### bright text colors

- brightRed
- brightGreen
- brightYellow
- brightBlue
- brightMagenta
- brightCyan
- brightWhite

### background colors

- bgBlack
- bgRed
- bgGreen
- bgYellow
- bgBlue
- bgMagenta
- bgCyan
- bgWhite
- bgGray
- bgGrey

### bright background colors

- bgBrightRed
- bgBrightGreen
- bgBrightYellow
- bgBrightBlue
- bgBrightMagenta
- bgBrightCyan
- bgBrightWhite

### styles

- reset
- bold
- dim
- italic
- underline
- inverse
- hidden
- strikethrough