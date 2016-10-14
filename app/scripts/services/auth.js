'use strict';

/**
 * @ngdoc service
 * @name jpApp.auth
 * @description
 * # auth
 * Service in the jpApp.
 */
angular.module('jpApp')
	.service('auth', function ($q,$http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
		return	{
			authenticate	:	function(object){
				var deferred	=	$q.defer();
					
				console.log('Form Object',object);
				
				//console.log($http.post('/api/authenticate'));
				
				$http.post('/api/authenticate',object).then(	function(result){
														console.log(result);
														deferred.resolve(result);
													},
													function(error){
														console.log(error);
														deferred.resolve(error);
													});
				
				return deferred.promise;
			}
		};
	});
