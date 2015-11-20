app.service('guestService', function (fbConnect, loginService) {
	//Just a reference to the firebase endpoint
	var firebaseUrl = fbConnect.root;
	//Creates an object using the Firebase Constructor with our endpoint passed in 
	var firebaseLogin = new Firebase(firebaseUrl);
	this.anonymousLogin = function () {
		firebaseLogin.authAnonymously(loginService.anonymousLogin);
	};
});