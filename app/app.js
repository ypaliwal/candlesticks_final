(function(){
	'use strict';

	angular
		.module('myApp', ['ui.router']);

	angular
		.module('myApp')
		.config(function($stateProvider, $httpProvider, $urlRouterProvider){
			$urlRouterProvider.otherwise('/');

			$stateProvider
			.state('landing', {
				url: '/',
				templateUrl: 'site/partials/landing.html',
				controller: 'LandingCtrl as ctrl'
			})
			.state('userPortfolio', {
				url: '/portfolio',
				templateUrl: 'site/partials/userPortfolio.html',
				controller: 'UserPortfolio as ctrl'
			});
		});

})();