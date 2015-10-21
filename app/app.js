var app = angular.module('bulliedHaven', [
	'ngRoute',
	'firebase'
	]);

app.constant('fbConnect', fbConnect());

function fbConnect(){
	var _root = 'https://bulliedhaven.firebaseio.com/';	
	return {
		root: _root,
		channels: {
			anger: {
				name: 'Anger',
				url: 'channel/anger/'
			},
			selfharm: {
				name: 'Self Harm',
				url: 'channel/selfharm/'
			},
			depression: {
				name: 'Depression',
				url: 'channel/depression/'
			},
			suicide: {
				name: 'Suicide',
				url: 'channel/suicide/'
			},
			fear: {
				name: 'Fear',
				url: 'channel/fear/'
			},
			selfestem: {
				name: 'Self Estem',
				url: 'channel/selfestem/'
			},
			friends: {
				name: 'Friends',
				url: 'channel/friends/'
			},
			random: {
				name: 'Random',
				url: 'channel/random/'
			},
			affirmation: {
				name: 'Affirmation',
				url: 'channel/affirmation/'
			}
		}
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
		})
		.when('/timeline', {
			templateUrl: "/app/views/timeLine.html",
			controller: 'TimelineController'
		})
		.when('/blog', {
			templateUrl: "/app/views/blog.html",
			controller: 'BlogController'
		});
		
		
});
