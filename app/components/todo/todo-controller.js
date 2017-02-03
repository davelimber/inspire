// (function () {
	// new up the TodoService that has already been configured for your use
	// There are two methods getTodos returns and array
	// saveTodos accepts an array and stores it to your local storage

	var to = this;
	var todoService = new TodoService();



	new Vue({
		el: '#todo',
		data: {
			newTodo: '',
			todos: [
				{ text: 'Add some todos' }
			]
		},
		mounted: function () {
			var listofTodos = todoService.getTodos()
			console.log('started todos')
			for (var i = 0; i < listofTodos; i++) {
                this.todos.push(listofTodos[i]);
				console.log(this.todos)
			}
		},

		methods: {
			addTodo: function () {
				var text = this.newTodo.trim()
				console.log(text, 'this is a todo')
				if (text) {
					todoService.saveTodos.push(text)
					this.newTodo = ''
				}
			},
			removeTodo: function (index) {
				this.todos.splice(index, 1)
			}
		}
	})


// } ())
