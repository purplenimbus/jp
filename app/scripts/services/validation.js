'use strict';

/**
 * @ngdoc service
 * @name jpApp.validation
 * @description
 * # validation
 * Service in the jpApp.
 */
angular.module('jpApp')
	.service('validation', function ($q) {
		// AngularJS will instantiate a singleton by calling "new" on this function
		return {
			validate	:	function(form){
				var deferred		=	$q.defer(),
					validated		=	[],
					formElement		=	angular.element(form),
					validatedCount	=	0,
					elemCount		=	formElement.find('input').length;
						
			formElement.find('input').each(function(){
							var element = angular.element(this);
								
							if(element[0].dataset.required){
								if(element.val()){
									
									//add success class
									element.parent().removeClass('has-success')
													.removeClass('has-error')
													.addClass('has-success');
									
									validated.push({
										name		:	element[0].name,
										value		:	element.val(),
										validated	:	true
									});
									
									validatedCount++;
								}else{
									//add error validation class to form element
									element.parent().removeClass('has-success')
													.removeClass('has-error')
													.addClass('has-error');
									
									validated.push({
										name		:	element[0].name,
										value		:	element.val(),
										validated	:	false
									});
								}
							}else{
								//add success class
								element.parent().removeClass('has-error').addClass('has-success');
								
								validated.push({
									name		:	element[0].name,
									value		:	element.val(),
									validated	:	true
								});
							}
								
						});
				
				console.log('Form Object',validatedCount,elemCount);
				
				if(validatedCount	===	elemCount){
					deferred.resolve({	valid	:	true	,	form	:	form	});
				}else{
					deferred.resolve({	valid	:	false	,	form	:	form	});
				}
					
				
				
				
				return deferred.promise;
			}
		};
	});
