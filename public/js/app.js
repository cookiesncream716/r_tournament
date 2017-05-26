var tournament=angular.module('tournament', [
	'ngRoute'])

// add 'ui.bootstrap' if using bootstrap

tournament.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'partials/dashboard.html'
		
		})
		.otherwise({
			redirectTo: '/'
		})
});