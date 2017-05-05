/*
 * Module dependencies
 */
var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')

var app = express()
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.logger('dev'))
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))
app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
  res.render('index',
  { title : 'Home' }
  )
})

app.get('/mocks/login-ar-plus', function (req, res) {
  res.render('mocks/login-ar-plus',
  { title : 'login' }
  )
})

app.get('/es-ar/botonera/botoneralateral', function (req, res) {
  res.render('mocks/searchbox',
  { title : 'login' }
  )
})
app.get('/es-ar/aerolineasplus/acercade', function (req, res) {
   res.render('index',
  { title : 'Home' }
  )
})
app.get('/arg/main.asp', function (req, res) {
   res.render('index',
  { title : 'Home' }
  )
})

app.get('/test', function (req, res) {
  res.render('test',
  { title : 'Home' }
  )
})

app.listen(3000)