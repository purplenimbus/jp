'use strict';

/**
 * @ngdoc function
 * @name jpApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the jpApp
 */
angular.module('jpApp')
  .controller('UserCtrl', function ($scope,modalService,elements,validation) {
    	$scope.signIn	=	function(){
			var modalType	=	'small',
				modalTitle	=	'Login',
				modalBody	=	'',
				modalFooter	=	elements.button({	type	:	'submit',	cls:	'btn-primary btn-lg btn-block',	ngClick	:	'login($event)'	},'Login');
				
				modalBody	+=	'<form>';
				modalBody	+=	'<div class="row form-group">';
				modalBody	+=	elements.column(12,elements.form.inputGroup(elements.glyph('user'),{ 	type		:	'text',	
														cls			:	'input-lg'	,	
														placeholder	:	'Username'	,	
														model		:	'',
														name		:	'Username',
														required	:	true
													}));
				modalBody	+=	'</div>';
				modalBody	+=	'<div class="row form-group">';
				modalBody	+=	elements.column(12,elements.form.inputGroup(elements.glyph('lock'),{ 	type		:	'password',	
														cls			:	'input-lg'	,	
														placeholder	:	'Password'	,	
														model		:	'',
														name		:	'Password',
														required	:	true
													}));
				modalBody	+=	'</div>';
				modalBody	+=	'</form>';
				
			modalService.modal(modalType,modalTitle,modalBody,modalFooter,$scope).then(function(result){
				console.log(result);
			});
		};
		
		$scope.login	=	function($event){
			//add Spinner
			$event.preventDefault();
			
			var modalContent	=	angular.element($event.currentTarget).parents()[1],
				form			=	angular.element(modalContent).find('form');
				
				validation.validate(form).then(function(result){
					//remove spinner
					angular.element('.spinner').remove();
					
					console.log('Validation Result',result);
				});
		};
		
		$scope.closeModal	=	function($event){
			console.log('Modal Close Event',$event);
			angular.element('#modal').modal('hide');
		};
  });
