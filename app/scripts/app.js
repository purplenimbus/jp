'use strict';

/**
 * @ngdoc overview
 * @name jpApp
 * @description
 * # jpApp
 *
 * Main module of the application.
 */
angular
  .module('jpApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'MainCtrl',
			controllerAs: 'main'
		})
		.when('/jobs', {
			templateUrl: 'views/jobs.html',
			controller: 'JobsCtrl',
			controllerAs: 'jobs'
		})
		.when('/user', {
		  templateUrl: 'views/user.html',
		  controller: 'UserCtrl',
		  controllerAs: 'user'
		})
		.otherwise({
			redirectTo: '/'
		});
  });
