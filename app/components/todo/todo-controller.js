// (function () {
// new up the TodoService that has already been configured for your use
// There are two methods getTodos returns and array
// saveTodos accepts an array and stores it to your local storage

var ts = this;
var todoService = new TodoService();



var vm = new Vue({
	el: '#todo',

	//This is where the data for our application will be held
	data: {
		newTask: "",
		taskList: []
	},

	mounted: function () {
		this.taskList = todoService.getTodos()
		// this.counter = this.localTodos.length
		// console.log = ('mounted function ', this.taskList)
	},

	computed: {
		areAllSelected: function () {
			//Check if every checked property returns true and if there is at least one todo item
			return this.taskList.every(function (task) {
				return task.checked;
			}) && this.taskList.length > 0;
		},
	},

	//This is where we will register the methods we want to use in our application
	methods: {

		addTask: function () {
			//trim() is used to remove whitespace from both ends of a string
			var task = this.newTask.trim();
			//if task is not an empty string
			if (task) {
				//Push an object containing the task to the taskList array
				this.taskList.push({
					text: task,
					checked: false
				});
				//Reset newTask to an empty string so the input field is cleared
				this.newTask = "";
				
			}
			//Save to localstorage
				todoService.saveTodos(this.taskList);
				console.log('addtask saved to storage')
		},

		removeTask: function (task) {
			var index = this.taskList.indexOf(task);
			this.taskList.splice(index, 1);
			//Save to localstorage
			todoService.saveTodos(this.taskList);
		},

		clearList: function () {
			//Setting taskList to an empty array clears the whole list
			this.taskList = [];
			//Save to localstorage
			todoService.saveTodos(this.taskList);
		},

		selectAll: function (task) {
			//targetValue is set to the opposite of areAllSelected
			var targetValue = this.areAllSelected ? false : true;
			//we use a for loop to set the checked state of all items to the target value
			for (var i = 0; i < this.taskList.length; i++) {
				this.taskList[i].checked = targetValue;
			}
		}
	}
});


	// data: {
	// 	newTodo: '',
	// 	// todos: todoService.getTodos(),
	// 	todos: [],
	// 	localTodos: [],
	// 	// pushTodos: []
	// 	index: '',
	// 	counter: 0,
	// 	task: '',
	// },

	// mounted: function () {
	// 	this.localTodos = todoService.getTodos()
	// 	this.counter = this.localTodos.length
	// 	// console.log = ('this is a test')

	// },
	// computed: {
	// 	areAllSelected: function () {
	// 		//Check if every checked property returns true and if there is at least one todo item
	// 		return this.localTodos.every(function (task) {
	// 			console.log('this task from areAllSelected', task)
	// 			return task.checked;
	// 		}) && this.localTodos.length > 0;
	// 	},
	// },


	// methods: {
	// 	addTodo: function () {
	// 		var task = this.newTodo.trim()
	// 		console.log('this is a todo')


	// 		if (task) {

	// 			this.localTodos.push({
	// 				text: task,
	// 				checked: false
	// 			});
	// 			this.newTodo = ''
	// 			this.counter++

	// 		}
	// 	},
	// 	removeTask: function (x) {
	// 		console.log('this is the index', x)
	// 		console.log('this length ', this.localTodos.length)
	// 		var index = this.localTodos.indexOf(x);
	// 		this.taskList.splice(index, 1);

	// 	},
	// 	clearList: function () {
	// 		//Setting taskList to an empty array clears the whole list
	// 		this.taskList = [];
	// 	},
	// 	selectAll: function (task) {
	// 		//targetValue is set to the opposite of areAllSelected
	// 		var targetValue = this.areAllSelected ? false : true;
	// 		//we use a for loop to set the checked state of all items to the target value
	// 		for (var i = 0; i < this.localTodos.length; i++) {
	// 			this.localTodos[i].checked = targetValue;
	// 		}

	// 	}
	// }
	// })
		// mounted: function () {
		// 	var listofTodos = todoService.getTodos()
		// 	console.log('started todos')
		// 	for (var i = 0; i < listofTodos; i++) {
        //         this.viewTodos.push(listofTodos[i]);
		// 		console.log(this.viewTodos, 'list of view todos in mount function')
		// 	}
		// },

		// methods: {
		// 	addTodo: function () {
		// 		var text = this.newTodo.trim()
		// 		console.log(text, 'this is a todo')
		// 		if (text) {
		// 			this.viewTodos.push(text)
		// 			todoService.saveTodos(this.viewTodos)
		// 			console.log('list of todos ', this.todos)
		// 			this.newTodo = ''
		// 		}
		// 	},
		// 	removeTodo: function (index) {
		// 		this.viewTodos.splice(index, 1)
		// 		console.log(this.viewTodos, 'the modified todos')
		// 		todoService.saveTodos(this.viewTodos)

		// 	}
		// }
	// })


// } ())
