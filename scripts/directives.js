(function(){
	var app = angular.module('todo-directives', []);

	app.directive('todoHeader', function(){
		return {
			restrict: 'E',
			templateUrl: 'partials/todo-header.html',
			replace: true
		}
	});

	app.directive('todoForm', function(){
		return {
			restrict: 'E',
			templateUrl: 'partials/todo-form.html',
			replace: true
		}
	});

	app.directive('todoTasks', function(){
		return {
			restrict: 'E',
			templateUrl: 'partials/todo-tasks.html',
			replace: true
		}
	});

	app.directive('todoDone', function(){
		return {
			restrict: 'E',
			templateUrl: 'partials/todo-done.html',
			replace: true
		}
	});
})();