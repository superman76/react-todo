// console.log("hello world");
var TodoList = React.createClass({
	render: function() {
	// var todosList is building the stuff
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
		  		<TodoList todos={ this.state.todos }/>
		  	</div>


		)
	}

})

React.render(<App/>,
	document.getElementById('app'));