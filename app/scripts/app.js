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
		'ngTouch',
		'ui.router',
		'satellizer',
	])
	.config(function ($stateProvider, $urlRouterProvider, $authProvider) {
		
		$authProvider.loginUrl = '/api/authenticate';
		
		$urlRouterProvider.otherwise('/');
	
		$stateProvider
			.state('home', {
				views	:	{
					'main': {
					  template: '<h1>HELLO!</h1>'
					}
				},
				url: '/',
				templateUrl	: '../views/main.html',
				controller	: 'MainCtrl',
				controllerAs: 'main'
			})
			.state('auth', {
				url: '/auth',
				templateUrl	: '../views/authView.html',
				controller	: 'AuthCtrl',
				controllerAs: 'auth'
			})
			.state('jobs', {
				url: '/jobs',
				templateUrl: 'views/jobs.html',
				controller: 'JobsCtrl',
				controllerAs: 'jobs'
			});
							
	});
  
