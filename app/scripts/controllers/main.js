'use strict';

/**
 * @ngdoc function
 * @name jpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jpApp
 */
angular.module('jpApp',[])
	.controller('MainCtrl', function ($scope,modalService) {
	
		$scope.signIn	=	function(){
			modalService.modal('Login','Login Form','',$scope).then(function(result){
				console.log('Modal',result);
			});
		};
		
		$scope.closeModal	=	function(){
			angular.element('#modal').empty();
		};
	
	});
