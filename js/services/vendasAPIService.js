angular.module("caseAngular").factory("vendasAPI", function($http, config){

	var _getVendas = function(){
		return $http.get(config.baseUrl + "/vendas");
	};

	return{
		getVendas: _getVendas
	};
});