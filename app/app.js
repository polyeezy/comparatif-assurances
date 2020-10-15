angular.module('app', ['ngRoute', 'ngCookies']);

angular.module('app', ['ngRoute']).config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'templates/question1.tpl.htm',
			controller: 'q1Controller',
		})
		.when('/etape1', {
			templateUrl: '../templates/question1.tpl.htm',
			controller: 'q1Controller',
		})
		.when('/etape2', {
			templateUrl: '../templates/question2.tpl.htm',
			controller: 'q2Controller',
		})
		.when('/etape3', {
			templateUrl: 'templates/question3.tpl.htm',
			controller: 'q3Controller',
		})
		.when('/resultat', {
			templateUrl: '../templates/resultat.tpl.htm',
			controller: 'resultController',
		})
		.otherwise({ templateUrl: '../templates/static/404.tpl.htm' });
});
