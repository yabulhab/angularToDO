
//initiates the angular app
var toDoApp = angular.module('toDoApp', []);

console.log("I'm working!");

toDoApp.controller("ToDoListCtrl", function($scope) {

	$scope.toDoListName = "Yasmine's ToDo List" ;
	$scope.myInputText= "";
	$scope.toDo = [
		{text:"fold laundry", completed:false}, 
		{text:"forage for meals", completed:false}
	];



});
