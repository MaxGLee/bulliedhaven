'use strict';
var app = angular.module('bulliedHaven', [
  'ui.router',
  'firebase',
  'angular-timeline',
  'luegg.directives'
]);

// constant to keep from hardcoding firebaseUrl throughout site
app.constant('FirebaseUrl', 'https://bulliedhaven.firebaseio.com/');

// routes for serving all of the views for the site
app.config(function($urlRouterProvider, $stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/app/views/home.html',
      resolve: {
        requireNoAuth: function($state, Auth) {
          return Auth.$requireAuth().then(function(auth) {
            $state.go('channels');
          }, function(error) {
            return;
          });
        }
      }
    })
    .state('login', {
      url: '/login',
      controller: 'AuthCtrl as authCtrl',
      templateUrl: '/app/views/login.html',
      resolve: {
        requireNoAuth: function($state, Auth) {
          return Auth.$requireAuth().then(function(auth) {
            $state.go('home');
          }, function(error) {
            return;
          });
        }
      }
    })
    .state('register', {
      url: '/register',
      controller: 'AuthCtrl as authCtrl',
      templateUrl: '/app/views/login.html',
      resolve: {
        requireNoAuth: function($state, Auth) {
          return Auth.$requireAuth().then(function(auth) {
            $state.go('home');
          }, function(error) {
            return;
          });
        }
      }
    })
    .state('profile', {
      url: '/profile',
      controller: 'ProfileCtrl as profileCtrl',
      templateUrl: '/app/views/profile.html',
      resolve: {
        auth: function($state, Users, Auth) {
          return Auth.$requireAuth().catch(function() {
            $state.go('home');
          });
        },
        profile: function(Users, Auth) {
          return Auth.$requireAuth().then(function(auth) {
            return Users.getProfile(auth.uid).$loaded();
          });
        }
      }
    })
    .state('channels', {
      url: '/channels',
      controller: 'ChannelsCtrl as channelsCtrl',
      templateUrl: '/app/views/channels.html',
      resolve: {
        channels: function(Channels) {
          return Channels.$loaded();
        },
        profile: function($state, Auth, Users) {
          return Auth.$requireAuth().then(function(auth) {
            return Users.getProfile(auth.uid).$loaded().then(function(profile) {
              if (profile.displayName) {
                return profile;
              } else {
                $state.go('profile');
              }
            });
          }, function(error) {
            $state.go('home');
          });
        }
      }
    })
    .state('channels.create', {
      url: '/create',
      templateUrl: '/app/views/create.html',
      controller: 'ChannelsCtrl as channelsCtrl'
    })
    .state('channels.messages', {
      url: '/{channelId}/messages',
      templateUrl: '/app/views/messages.html',
      controller: 'MessagesCtrl as messagesCtrl',
      resolve: {
        messages: function($stateParams, Messages) {
          return Messages.forChannel($stateParams.channelId).$loaded();
        },
        channelName: function($stateParams, channels) {
          return '#' + channels.$getRecord($stateParams.channelId).name;
        }
      }
    })
    .state('channels.private', {
      url: '/{uid}/messages/direct',
      templateUrl: '/app/views/messages.html',
      controller: 'MessagesCtrl as messagesCtrl',
      resolve: {
        messages: function($stateParams, Messages, profile) {
          return Messages.forUsers($stateParams.uid, profile.$id).$loaded();
        },
        channelName: function($stateParams, Users) {
          return Users.all.$loaded().then(function() {
            return '@' + Users.getDisplayName($stateParams.uid);
          });
        }
      }
    })
  $urlRouterProvider.otherwise('/');
});

//   .state('timeLine', {
//     url: '/timeline',
//     templateUrl: '/app/views/time-line.html',
//     controller: 'TimelineController'
//   })
//   .state('mentorReg', {
//     url: '/register/mentor',
//     templateUrl: '/app/views/mentor-registration.html',
//     controller: 'MentorRegController'
//   });
// .state('blog', {
//   url: '/blog',
//   templateURL: '/app/views/blog.html',
//   controller: 'blog-controller'
// })
