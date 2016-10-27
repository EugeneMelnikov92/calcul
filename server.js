var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/html');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
/*app.set('views', __dirname + '/views');
app.engine('html', engines.mustache);
app.set('view engine', 'html');*/
app.get('/', function(req, res) {
    res.render('index.html');
});
app.get('/calculator.html', function(req, res) {
    res.render('calculator.html');
});
app.get('/index.html', function(req, res) {
    res.render('index.html');
});
app.get('/signup.html', function(req, res) {
    res.render('signup.html');
});
app.post('/number', function(req, res){
	console.log(req.body);
	res.send('waagwg');
});
app.get('/name', function(req,res){
	res.send('maria');
});
app.post('/signup', function(req,res){
	console.log(req.body);
	res.send('success');
})

app.listen(8000);