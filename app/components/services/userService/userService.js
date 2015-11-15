app.service('Users', function ($firebaseArray, $firebaseObject, fbConnect) {
	var firebaseUrl = fbConnect.root;
	var usersRef = new Firebase(firebaseUrl);
	var users = $firebaseArray(usersRef);

	var Users = {
		getProfile: function (uid) {
			return $firebaseObject(usersRef.child(uid));
		},
		getDisplayName: function (uid) {
			return users.$getRecord(uid).username;
		},
		all: users
	};

	return Users;


});