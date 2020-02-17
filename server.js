const express = require('express'),
  app = express(),
  bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}))


app.set('view engine', 'ejs')
app.use(express.static('public')); //Usará a pasta public

app.get('/', function (req, res) {
  // Rota raiz
  res.render('home');
});

app.post('/', function (req, res) { 

  res.redirect('/')
})



app.get('*', function (req, res) {
  //Se não existir a URL pesquisada, redirecione para a rota raiz
  res.redirect('/');
});

app.listen({ port: process.env.PORT || 8000 });
