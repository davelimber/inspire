(function () {
// new up the TodoService that has already been configured for your use
// There are two methods getTodos returns and array
// saveTodos accepts an array and stores it to your local storage

var ts = this;
var todoService = new TodoService();



var vm = new Vue({
	el: '#todo',

	data: {
		newTask: "",
		taskList: []
	},

	mounted: function () {
		this.taskList = todoService.getTodos()
		},

	computed: {
		areAllSelected: function () {
			//Check if every checked property returns true and if there is at least one todo item
			return this.taskList.every(function (task) {
				return task.checked;
			}) && this.taskList.length > 0;
		},
	},

	methods: {

		addTask: function () {
			var task = this.newTask.trim();
			
			if (task) {
				this.taskList.push({
					text: task,
					checked: false
				});
				this.newTask = "";
				
			}
			//Save to localstorage
				todoService.saveTodos(this.taskList);
				// console.log('addtask saved to storage')
		},

		removeTask: function (task) {
			var index = this.taskList.indexOf(task);
			this.taskList.splice(index, 1);
			//Save to localstorage
			todoService.saveTodos(this.taskList);
		},

		clearList: function () {
			this.taskList = [];
			//Save to localstorage
			todoService.saveTodos(this.taskList);
		},

		selectAll: function (task) {
			var targetValue = this.areAllSelected ? false : true;
			for (var i = 0; i < this.taskList.length; i++) {
				this.taskList[i].checked = targetValue;
			}
		}
	}
});
	
} ())
