(function(){
	
	var app = angular.module('todo', ['todo-directives']);
	
	app.run(function($rootScope){
		$rootScope.title = 'Do it × Regret it';
		$rootScope.description1 = 'A cool and minimalistic todo list manager for your needs.';
		$rootScope.description2 = 'It’s so simple that it makes you smile :)';
	});
	
	app.controller('AddTaskController', function($scope){
		this.tasks = task;
		this.task = {};
		// this.task.createdOn = new Date();
		// this.task.status = true;
		
		this.addTask = function(){
			this.task.createdOn = new Date();
			this.task.status = true;
			this.task.deleted = false;
			this.tasks.push(this.task);
			this.task = {};
			// console.log(this.tasks);
		};
	});
	
	app.controller('TaskController', function(){
		this.tasks = task;
		this.done = function(doneTask){
			doneTask.status = false;
		};
		this.deleteTask = function(delTask){
			delTask.deleted = true;
		};
		this.noneTaskDetect = function(){
			var counter = 0;
			for (var i = 0; i < task.length; i++){
				if(task[i].status == true && task[i].deleted == false){
					counter++;
				}
			}
			if(counter==0){
				return true;
			}
		};
	});
	
	app.controller('DoneTaskController', function($scope){
		this.tasks = task;
		this.undoTask = function(unTask){
			unTask.status = true;
		};
		this.noneTaskDetect = function(){
			var counter = 0;
			for (var i = 0; i < task.length; i++){
				if(task[i].status == false){
					counter++;
				}
			}
			if(counter==0){
				return true;
			}
		};
		
	});
	
	var task = [];
	
	// var task = [
	// 	{
	// 		name: 'Implement responsive images',
	// 		status: false,
	// 		deleted: false,
	// 		createdOn: 1469829600000
	// 	},
	// 	{
	// 		name: 'Design a todo list for fun',
	// 		status: false,
	// 		deleted: false,
	// 		createdOn: 1469829600000
	// 	},
	// 	{
	// 		name: 'Fix font bug on Wordpress site',
	// 		status: false,
	// 		deleted: false,
	// 		createdOn: 1469829600000
	// 	},
	// 	{
	// 		name: 'Buy an iPad stand for my desk',
	// 		status: false,
	// 		deleted: false,
	// 		createdOn: 1469829600000
	// 	},
	// 	{
	// 		name: 'Buy groceries',
	// 		status: false,
	// 		deleted: false,
	// 		createdOn: 1469829600000
	// 	}
		
	// ];
	
})();