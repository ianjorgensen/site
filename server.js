var express = require('express')
  , engine = require('ejs-locals')
  , app = express()
  , fs = require('fs')
  , less = require('less-middleware')
  , public = __dirname + '/web'
  , port = 9091;

app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');

// views
app.get('/', function(request, response) {
	response.render('home', {rows: []});
});

app.get('/work/:project', function(request, response) {
	response.render('work/' + request.params.project + '.ejs', {page: {name: 'work', title: 'work | ' + request.params.project}});
});

app.get('/:view', function(request, response) {
	response.render(request.params.view, {page: {name: request.params.view, title: request.params.view}});
});

app.use(less({ src: public }));
app.use(express.static(public));

app.listen(port);
console.log('Listening on port ' + port);