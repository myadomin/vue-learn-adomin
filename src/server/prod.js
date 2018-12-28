var express = require('express')
const app = express()
const bodyParser = require('body-parser')
const opn = require('opn')

app.all('*', function (req, res, next) {
  // 允许跨域 后面设置了Access-Control-Allow-Credentials那这里就不能为'*'
  res.header('Access-Control-Allow-Origin', req.headers.origin)
  // 允许cookie跨域通用
  res.header('Access-Control-Allow-Credentials', true)
  // 必须要设置下面才能然后post启用Content-Type: application/json;charset=UTF-8进行前后端传输
  // 因为启用了Content-Type json传输，所以触发了cors的复杂请求，所以post先发一个options请求校验跨域，然后再发一个post请求
  // 具体见 http://www.cnblogs.com/qunxiadexiaoxiangjiao/p/9446956.html
  res.header('Access-Control-Allow-Headers', 'content-type')
  next()
})

app.get('/api/testget', function (req, res) {
  res.json({
    code: 1,
    msg: 'get请求prod服返回'
  })
})

// post需要bodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.post('/api/testpost', function (req, res) {
  res.json({
    code: 1,
    query: req.body,
    msg: 'post请求prod服返回'
  })
})

app.listen(3001)
console.log('open localhost:3001')
// opn('http://localhost:3001')
