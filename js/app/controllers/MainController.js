function MainController($scope) {
	$scope.name = 'Anna';
}

angular
	.module('app')
	.controller('MainController', MainController);
