var app = angular.module('bulliedHaven', [
	'ngRoute',
	'firebase'
	]);

app.constant('fbConnect', fbConnect());

function fbConnect(){
	var _root = 'https://bulliedhaven.firebaseio.com/';
	// var _channels = _root + 'channel/';	
	return {
		root: _root
		// channels: {
		// 	anger: 'anger/',
		// 	selfHarm: 'self-harm/',
		// 	depression: 'depression/',
		// 	suicide: 'suicide/',
		// 	fear: 'fear/',
		// 	selfEstem: 'self-estem/',
		// 	friends: 'friends/',
		// 	random: 'random/',
		// 	affirmation: 'affirmation/'
		}
}

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: '/app/views/home.html',
			controller: 'HomeController'
		})
		.when('/login', {
			templateUrl: '/app/views/login.html',
			controller: 'LoginController'
		})
		.when('/dashboard', {
			templateUrl: '/app/views/dashboard.html',
			controller: 'DashboardController'
		});
});
