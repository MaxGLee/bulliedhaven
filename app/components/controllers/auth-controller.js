var app = angular.module('firebaseLogin');

app.controller('AuthController', function ($scope, authService, $state) {
	
	$scope.user = authService.isAuthed();
	
	if(!$scope.user){
		$state.go('login');
	}
	
  // $scope.anonymousLogin = function () {
    // return guestService.anonymousLogin($scope.authData, function (authData) {

    //   $state.go('dashboard')
      
    // })
  // }
});