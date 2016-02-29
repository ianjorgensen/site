var express = require('express')
  , engine = require('ejs-locals')
  , app = express()
  , fs = require('fs')
  , less = require('less-middleware')
  , public = __dirname + '/web'
  , port = process.argv[2] || 8080;

app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');

// views
app.get('/', function(request, response) {
	response.render('home', {rows: []});
});

app.get('/conf', function(request, response) {
	response.render('confs');
});

app.get('/showcase/:project', function(request, response) {
	response.render('work/' + request.params.project + '.ejs', {page: {name: 'showcase', title: 'showcase | ' + request.params.project}});
});

var render = function(view) {
	return function(request, response) {
		response.render(view, {page: {name: view, title: view}});	
	}
};

app.get('/piddle', function(request, response) {
	response.redirect('/showcase/piddle');
});

app.get('/one', function(request, response) {
	response.redirect('/one.html');
	response.end();
});

app.get('/index', render('index'));
app.get('/about', render('about'));
app.get('/services', render('services'));
app.get('/showcase', render('showcase'));
app.get('/contact', render('contact'));

less
app.use(express.static(public));

app.use(function(reqquest, response, next){
	response.render('404');
});

app.listen(port);
console.log('Listening on port ' + port);