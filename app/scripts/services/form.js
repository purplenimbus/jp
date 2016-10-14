'use strict';

/**
 * @ngdoc service
 * @name jpApp.form
 * @description
 * # form
 * Service in the jpApp.
 */
angular.module('jpApp')
	.service('form', function (elements) {
		// AngularJS will instantiate a singleton by calling "new" on this function
		return	{
			login	:	function(){
				var	str	=	'';
				
				str	+=	'<form>';
				str	+=	'<div class="row form-group">';
				str	+=	elements.column(12,elements.form.inputGroup(elements.glyph('user'),{ 	
														type		:	'email',	
														cls			:	'input-lg'	,	
														placeholder	:	'Email'	,	
														model		:	'',
														name		:	'email',
														required	:	true
													}));
				str	+=	'</div>';
				str	+=	'<div class="row form-group">';
				str	+=	elements.column(12,elements.form.inputGroup(elements.glyph('lock'),{ 	
														type		:	'password',	
														cls			:	'input-lg'	,	
														placeholder	:	'Password'	,	
														model		:	'',
														name		:	'password',
														required	:	true
													}));
				str	+=	'</div>';
				str	+=	'</form>';
				
				return str;
			},
			
			register	:	function(){
				var str	=	'';
				
				return str;
			}
		};
	});
