app.controller('MentorRegController', MentorRegController);


function MentorRegController($scope, loginService){
	$scope.test = "Hello From MentorReg";
	$scope.submitRegistration = function(user){
		loginService.registerMentor(user).then(function(mentor){
			if(mentor.error){
				//TODO: Make a better error message
				$scope.message="Error: Something went wrong, please try again later.";
			} else {
				$scope.message = "You have succesfully applied to be a Mentor. Your application is under review, and you will be contacted in due time.";
				$scope.user = '';
				//TODO: redirect to Dashboard
			}
		});
	}
}