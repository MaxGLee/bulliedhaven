var app = angular.module('firebaseLogin', []);

app.service('loginService', function (fbConnect, $rootScope) {
	//Just a reference to the firebase endpoint
	var firebaseUrl = fbConnect.root;
	//Creates an object using the Firebase Constructor with our endpoint passed in 
	var firebaseLogin = new Firebase(firebaseUrl);

	//login method to be called from our controller. The callback is then passed the authenticated user
	//TO DO: refactor below functions to reduce how much is duplicated
	this.login = function (user, cb) {
		firebaseLogin.authWithPassword({
			username: user.username,
			email: user.email,    //Email and Password come from our login form 
			password: user.password
		}, function (err, authData) {

			if (err) {
				switch (err.code) {
					case "INVALID_EMAIL":
					// handle an invalid email 
					case "INVALID_PASSWORD":
					// handle an invalid password
					default:
				}
			} else if (authData) {
				// user authenticated with Firebase
				console.log("Logged In! User ID: " + authData.uid);// + " " + user.username);
				cb(authData); //gives the authenticated user to our callback
			}
		});
	}

	this.register = function (user, cb) {
		firebaseLogin.createUser({
			email: user.email,
			password: user.password
		}, function (error) {

			if (!error) {
				console.log("User created successfully");
				firebaseLogin.authWithPassword({
					email: user.email,
					password: user.password
				}, function (err, authData) {
					if (authData) {
						authData.username = user.username;
						authData.timestamp = Date.now();
						firebaseLogin.child('users').child(authData.uid).set(authData);
						cb(authData);
					} else {
						console.log('something went wrong');
					}
				});
			} else {
				console.log("Error creating user:", error);
				return false;
			}
		});
	}

	this.registerMentor = function (user, cb) {

	}

	this.anonymousLogin = function (user, cb) {
		firebaseLogin.authAnonymously(
			function (err, authData) {
				// var _number = 0;
				// var _name = "Anonymous" + _number;
				// var _username = function(){
				// 	_number += Math.random();
				// 	return _name;
				// }
				if (authData) {
					//TO DO add/create an anonymous username generator
					authData.username = "testing";
					authData.timestamp = Date.now();
					firebaseLogin.child('users').child(authData.uid).set(authData);
					console.log(authData.username);
					cb(authData);
				} else {
					console.log('something went wrong');
					cb(authData);
				}
			});
	};
});