/* global Firebase */
app.service('ChatService', ChatService);

function ChatService(FirebaseUrl, $firebaseObject, $firebaseArray, authService, loginService, $rootScope) {

	var _currentChannel = _getChannel(FirebaseUrl.channels.anger.name);
	var _activeChat = FirebaseUrl.channels.anger.name;

	function _getChannel(channelName){
		_activeChat = channelName;
		channelName = channelName.toLowerCase().split(' ').join('');
		if(!FirebaseUrl.channels[channelName]){
			return;
		}
		var _chatroom = new Firebase(FirebaseUrl.root + FirebaseUrl.channels[channelName].url);
		_currentChannel =  $firebaseArray(_chatroom);
		return _currentChannel;
	}

	this.getActiveChat = function(){
		return _activeChat;
	}

	this.getChats = function () {
		return _currentChannel;
	};

	this.getChannels = function () {
		return FirebaseUrl.channels;
	};

	this.sendChat = function (user, message) {
		if (!message) {
			return;
		}
		var chat = {
			body: message,
			//username: user.username,
			timestamp: Date.now()
		}
		_currentChannel.$add(chat);
	};

	this.changeChannel = function(channelName){
		return _getChannel(channelName);
	}

	// this.kickUser = function(user, personToKick){
	// 	if(!user.isMod()){
	// 		return;
	// 	}
	// 	fb_chatroom.users[personToKick.id].$remove();
	// 	fb_chatroom.$save();
	// }

}
