var ref = new Firebase("https://bulliedHaven.firebaseio.com");
ref.authAnonymously(function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
});