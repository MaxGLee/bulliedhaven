var app = angular.module('bulliedHaven', [
	'ui.router',
	'firebase',
	'firebaseLogin',
	'angular-timeline',
	'luegg.directives'
]);


app.constant('fbConnect', fbConnect());


// fbConnect used to limit having to hardcode the full url throughout
// the site
function fbConnect() {
	var _root = 'https://bulliedhaven.firebaseio.com/';
	return {
		root: _root,
		db: new Firebase(_root),
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

// routes for serving all of the views for the site
app.config(function ($urlRouterProvider, $stateProvider) {
	$urlRouterProvider.otherwise('/login');
	$stateProvider
		.state('login', {
			url: '/login',
			templateUrl: '/app/views/login.html',
			controller: 'LoginController'
		})
		.state('auth', {
			abstract: true,
			template: '<ui-view></ui-view>',
			controller: 'AuthController'
		})
		.state('auth.dashboard', {
			url: '/dashboard',
			views: {
				'chat@': {
					templateUrl: '/app/views/chat.html',
					controller: 'DashboardController'
				}
			}

		})
		.state('timeLine', {
			url: '/timeline',
			templateUrl: '/app/views/timeLine.html',
			controller: 'TimelineController'
		})
		.state('mentorReg', {
			url: '/register/mentor',
			templateUrl: '/app/views/mentor-registration.html',
			controller: 'MentorRegController'
		})
		.state('blog', {
			url: '/blog',
			templateURL: '/app/views/blog.html',
			controller: 'blog-controller'
		});
});
