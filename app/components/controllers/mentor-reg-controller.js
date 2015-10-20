app.controller('MentorRegController', MentorRegController);


function MentorRegController($scope, loginService){
	$scope.test = "Hello From MentorReg";
	$scope.submitRegistration = function(user){
		loginService.registerMentor(user).then(function(mentor){
			if(mentor.error){
				//TODO: show Error
			} else {
				$scope.message = "You have succesfully registered as a mentor your application is under review.";
				$scope.user = '';
				//TODO: redirect to Dashboard
			}
		});
	}
}