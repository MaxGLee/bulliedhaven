var app = angular.module('bulliedHaven', [
	'ui.router',
	'firebase',
	'firebaseLogin'
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

app.config(function($urlRouterProvider, $stateProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: '/app/views/home.html',
			controller: 'HomeController'
		})
		.state('login', {
			url: '/login',
			templateUrl: '/app/views/login.html',
			controller: 'LoginController'
		})
		.state('dashboard', {
			url: '/dashboard',
			templateUrl: '/app/views/dashboard.html',
			controller: 'DashboardController'
		})
		.state('mentorReg', {
			url: '/register/mentor',
			templateUrl: '/app/views/mentor-registration.html',
			controller: 'MentorRegController'
		});
});
