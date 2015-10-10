app.service('userService', function () {
  var ref = new Firebase("https://bulliedhaven.firebaseio.com");
  ref.createUser({
    email: "",
    password: ""
  }, function (error, userData) {
    if (error) {
      console.log("Error creating user:", error);
    } else {
      console.log("Successfully created user account with uid:", userData.uid);
    }
  });
});