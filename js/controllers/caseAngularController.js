angular.module("caseAngular").controller("caseAngularCtrl", function($scope, vendas){
	$scope.app = "Case Angular";
	$scope.vendas = vendas.data;
});