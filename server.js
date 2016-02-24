var express = require('express');
// Line 1 is a variable which requires express. Express is a 
// library.
var app = express();
// using express.  calling it as a function
var bodyParser = require('body-parser');
// Line 1 is a variable which requires body-parser. body-parser is a 
// library.  
	// assigning these variables so that we can plug them into our code

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todos');

var todoRouter = require('./routes/todos');

var Todo = require('./models/todo');

app.use(bodyParser.urlencoded({ extended: true }));
// this mounts middleware
app.use(bodyParser.json());
// this mounts middleware

app.use(express.static('public'));
	// tells us that all these files in this public folder
	// are static

app.set('view engine', 'ejs');
	// 
app.get('/', function(req, res){
	res.render('index', {title: "Welcome to my Todo List"})
});
	// app.set & app.get use 
	// with the res.render('index') you can also pass other objects
	// in such as {title: "hello world"}

app.get('/todos', function(req, res){
	res.render('todos', { todos: data } );
});


var port = process.env.PORT || 8080;
// assigning a variable.  this is for the end user.  
// 
var router = express.Router();
// Router is a method in the express library.  Router is a
// resource, which provides a path (mini-app)
router.use(function(req, res, next) {
	console.log('there is something happening here');
	next();
});

router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our API!'});
});
	//line 63 is do something when someone goes to the port (line 53)
app.use('/api', todoRouter);
	// when we added the routes directory with bears.js we had 
	// to create a new router called bearRouter, which was just
	// updated on line 28

app.listen(port);
console.log('⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡\n⚡⚡⚡⚡ Magic happens on port' + port + ' ⚡⚡⚡⚡\n⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡');