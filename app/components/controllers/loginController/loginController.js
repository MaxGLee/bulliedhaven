app.controller('LoginController', LoginController);

function LoginController($scope, $location){
  $scope.test = 'Hey You From Login'
  
  $scope.login = function(){
    if($scope.user.name && $scope.user.password){
      // AuthService.login($scope.user).then(function(err, authData){
      //   if(err){
      //    return $scope.error = err;
      //   }
      //   $location.path('dashboard');
      // })
    }
  }
  
}