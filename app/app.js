var app = angular.module('bulliedHaven', ['ngRoute']);

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
		.when('/blog', {
			templateUrl: '/app/views/blog.html',
			controller: 'BlogController'
		});
})
