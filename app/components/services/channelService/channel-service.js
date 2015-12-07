angular.module('angularfireSlackApp')
  .factory('Channels', function($firebaseArray, FirebaseUrl){
    var firebaseUrl = fbConnect.root;
    var ref = new Firebase(firebaseUrl+'channels');
    var channels = $firebaseArray(ref);

    return channels;
});