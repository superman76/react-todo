// console.log("hello world");
var TodoList = React.createClass({
	render: function() {
	// var todosList is building the stuff
		var self = this;
		var todosList = this.props.todos.map(function(t){
			return (
			<div className="panel panel-default">
		  	  	<div className="panel header">
		  			TODO NAME
		  			<p> { t.name } </p>
			  	</div>
				<div className="panel panel-body">
			  		TODO DESCRIPTION
			  		<p> { t.description } </p>
			  	</div>
				<div className="panel panel-footer">
			  		TODO DUE DATE
		  			<p> { t.dueDate } </p>
		  			<button className="btn btn-warning" 
		  			onClick={self.props.handleDelete.bind(this, t._id)}> 
		  			Delete </button>
			  	</div>
		  	</div>
				)
		})
		return (
			<div>
		  		<h2> { todosList } </h2>
		  	</div>
		  	// {todosList} is displaying the stuff
		)
	}
})
 var TodoForm = React.createClass({
 	getInitialState: function() {
 		return {
 			name: '',
 			description: '',
 			dueDate: ''		
 		}
 	},
 	handleNameChange: function(e) {
 		this.setState({
 			name: e.target.value
 		})
 	},
	handleDateChange: function(e) {
		this.setState({
			dueDate: e.target.value
		})
	},
	handleDescriptionChange: function(e) {
		this.setState({
			description: e.target.value
		})
	},
	handleForm: function(e) {
		e.preventDefault();
		var name = this.state.name.trim();
		var description = this.state.description.trim();
		var dueDate = this.state.dueDate.trim();
		this.props.handleSubmit({
			name: name, description: description, dueDate: dueDate
		})
		this.setState({
			name: '',
			dueDate: '',
			description: ''
		})
	},
 	render: function() {
 		var self = this;
 		return (
 			<form onSubmit={this.handleForm} method="POST" role="form">
 				<legend>ToDo Form</legend>
 			
 				<div class="form-group">
 					<label for=""></label>
 					<input onChange={this.handleNameChange} value={this.state.name}
 					type="text" class="form-control" id="" placeholder="Name"></input>
 				</div>

 				<div class="form-group">
 					<label for=""></label>
 					<input onChange={this.handleDescriptionChange} value={this.state.description}
 					type="text" class="form-control" id="" placeholder="Description"></input>
 				</div>

 				 <div class="form-group">
 					<label for=""></label>
 					<input onChange={this.handleDateChange} value={this.state.dueDate} 
 					type="Date" class="form-control" id="" placeholder="Due Date"></input>
 				</div>


 				<div>
 			
 				<button type="submit" class="btn btn-primary">Submit</button>
 				</div>
 			</form>
 			)
 	}
 })

var App = React.createClass({
	getInitialState: function() {
		return {
			todos: []
		}
	},

	loadTodosFromServer: function() {
		var self = this;
		$.ajax({
			url: '/api/todos',
			method: 'GET'
		}).done(function(data){
			self.setState({
				todos: data
			})
		});
	},
	handleSubmit: function(todo) {
		var self = this;
		$.ajax({
			url: '/api/todos/',
      		method: 'POST',
      		data: todo
    	}).done(function(){
      		self.loadTodosFromServer();
     	console.log('posted todo to server!')
    })
  },
	handleDelete: function(id) {
		var id = id
		var self = this
		$.ajax({
			url: '/api/todos/' + id,
			method: 'DELETE'
		}).done(function(data){
			console.log('deleted todo');
			self.loadTodosFromServer();
		})
	},
	componentDidMount: function() {
		this.loadTodosFromServer();
	},

// 

// function to set initial state

// ajax to go get todos

	render: function() {
		return (
			<div>
		  		<h3> Hello World! </h3>
		  		<TodoList handleDelete={this.handleDelete } todos={ this.state.todos }/>
		  		<TodoForm handleSubmit={this.handleSubmit }/>
		  	</div>


		)
	}

})

React.render(<App/>,
	document.getElementById('app'));