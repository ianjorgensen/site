var express = require('express')
  , engine = require('ejs-locals')
  , app = express()
  , fs = require('fs')
  , port = 9091;

app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');

// views
app.get('/', function(request, response) {
	response.render('home', {rows: []});
});
app.get('/:view', function(request, response) {
	response.render(request.params.view);
});

// static
app.use('/img', express.static(__dirname + '/web/img'));
app.use('/js', express.static(__dirname + '/web/js'));
app.use('/style', express.static(__dirname + '/web/style'));

app.listen(port);
console.log('Listening on port ' + port);