app.controller('LoginController', function ($scope, loginService, $state, $window) {

  $scope.login = function () {
    return loginService.login($scope.user, function (user) {

      $state.go('auth.dashboard')

    });
  };

  $scope.register = function () {
    return loginService.register($scope.user, function (user) {

      $state.go('auth.dashboard')

    });
  };

  $scope.status = 'Register';
  $scope.showReg = function () {
    if ($scope.status === 'Register') {
      $scope.status = 'Login';
    } else {
      $scope.status = 'Register';
    }
    $scope.reg = !$scope.reg;
  };

  $scope.anonymousLogin = function () {
    return loginService.anonymousLogin($scope.authData, function (authData) {

      $state.go('auth.dashboard')

    })
  }
});
