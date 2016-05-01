
//initiates the angular app
var toDoApp = angular.module('toDoApp', []);

console.log("I'm working!");

toDoApp.controller("ToDoListCtrl", function($scope) {

	$scope.toDoListName = "Yasmine's ToDo List" ;
	$scope.myInputText= "";
	$scope.toDo = [
		{text:"fold laundry", completed:false}, 
		{text:"forage for meals", completed:false},
		{text:"whine", completed:true},
		{text:"uuuuugh", completed:false}
	];
	$scope.errorMsg = false;
	$scope.submitItem = function(){
		console.log("myInputText ", $scope.myInputText)
		if ($scope.myInputText === "") {
			$scope.errorMsg = true;
		} else {
			var newObject = {text: $scope.myInputText, completed:false};
			$scope.toDo.push(newObject);		
			$scope.myInputText = "";
			$scope.errorMsg = false;
		};

	};


});
