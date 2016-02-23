var express = require('express');
var router = express.Router();
var Todo = require('../models/todo');
// the 2 periods indicate to go up 2 directory levels.  created
// a var named todo and requiring our schema

router.route('/todos')
// we are grabbing a url name, and further lines tell what to do on it
	.post(function(req, res) {
// 
	var todo = new Todo();
// constructing a new todo, calling our schema
	todo.name = req.body.name;
	todo.dueDate = req.body.dueDate;
	todo.description = req.body.description;
// these are pulling it from the request(or the form, or postman)
	todo.save(function(err, todo) {
			if(err) {
				// console.log(err)// do something
				return 
			} else {
				res.json(todo)// do something
			}
		})
	})
// if we have an error then console log the error, or put out 
// the new todo (res.json)
	.get(function(req, res) {
		Todo.find(function(err, todos){
			if(err) {
				console.log(err)
			} else {
				res.json(todos)
			}
		})
	});
// returns the entire collection (all todos).  
// 
router.route('/todos/:todo_id')
// the colon above tell us it is a param
	.get(function(req, res){
		Todo.findById(req.params.todo_id, function(err, todo) {
//params tells us to look in the url vs.  
// function(err, todo) is the callback.  Is taking 2 parameter
// 1st parameter is requesting the todos id from your url
// the call back is the function and what to do with it.
// If we didn't do the callback it would go find the todo but never
// tell us.  Ordering coffee analogy - todo.findbyid is ordering 
// coffee, req.params.todo_id is the type of coffee, function(err,
// todo) is requesting that you tell me, the if/else is saying
// to tell me if you screwed up, or if it is done.
			if(err){
				console.log(err);
			} else {
				res.json(todo);
			}
		})
	})
	.put(function(req, res){
		Todo.findById(req.params.todo_id, function(err, todo){
		  if(err){
		  	console.log(err)
		  } else {
		  	todo.name = req.body.name ? req.body.name : todo.name;
		  	todo.dueDate = req.body.dueDate ? req.body.dueDate : todo.dueDate;
		  	todo.description = req.body.description ? req.body.description : todo.description;
		  	
		  	todo.save(function(err){
		  		if(err){
		  			console.log(err)
		  		} else {
		  			res.json({title: "todo updated"});
		  		}
		  	})
		  }
		})
	})
	.delete(function(req, res){
		Todo.remove({_id: req.params.todo_id}, function(err, todo){
			if(err){
				console.log(err)
			} else {
				res.json({title: "todo deleted"});
			}
		})
	})


module.exports = router;