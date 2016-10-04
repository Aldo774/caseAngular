angular.module("caseAngular").config(function($routeProvider){
	$routeProvider.when("/vendas", {
		templateUrl: "view/vendas.html",
		controller: "caseAngularCtrl",
		resolve: {
			vendas: function(vendasAPI){
				return vendasAPI.getVendas();
			}
		}			
	});
	$routeProvider.otherwise({redirectTo: "/vendas"});
});