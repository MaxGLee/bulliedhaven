var app = angular.module('firebaseLogin');

app.factory('authService', function (fbConnect, $firebaseObject) {
	var db = fbConnect.db;
	var _user;
	var _username;
	return {
		isAuthed: function(){
			var authData = db.getAuth();
			if(authData){
				if(!_user){
					_user = $firebaseObject(new Firebase(fbConnect.root + 'users/'+ authData.uid));
					_username = fbConnect.root + 'users/'+ authData.uid;
				}
				return _user;			
			}
			return false; 
		}
	}
});