'use strict';

/**
 * @ngdoc function
 * @name jpApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the jpApp
 */
angular.module('jpApp')
  .controller('UserCtrl', function ($scope,modalService,elements) {
    	$scope.signIn	=	function(){
			console.log('Sign In');
			var modalType	=	'small',
				modalTitle	=	'Login',
				modalBody	=	'',
				modalFooter	=	elements.button({	type	:	'submit',	cls:	'btn-primary btn-lg btn-block',	ngClick	:	'login($event)'	},'Login');
				
				modalBody	+=	'<form>';
				modalBody	+=	'<div class="row form-group">';
				modalBody	+=	elements.column(12,elements.form.input({ 	type		:	'text',	
														cls			:	'input-lg'	,	
														placeholder	:	'Username'	,	
														model		:	''
													}));
				modalBody	+=	'</div>';
				modalBody	+=	'<div class="row form-group">';
				modalBody	+=	elements.column(12,elements.form.input({ 	type		:	'password',	
														cls			:	'input-lg'	,	
														placeholder	:	'Password'	,	
														model		:	''
													}));
				modalBody	+=	'</div>';
				modalBody	+=	'</form>';
				
			modalService.modal(modalType,modalTitle,modalBody,modalFooter,$scope).then(function(result){
				console.log('Modal',result);
			});
		};
		
		$scope.login	=	function($event){
			console.log('Trying to login',$event);
		};
		
		$scope.closeModal	=	function($event){
			console.log('Modal Close Event',$event);
			angular.element('#modal').modal('hide');
		};
  });
