/* global Firebase */
app.service('ChatService', ChatService);

function ChatService(fbConnect, $firebaseObject, $firebaseArray) {
	
	var _currentChannel = _getChannel(fbConnect.channels.anger.name);
	var _activeChat = fbConnect.channels.anger.name;
	
	function _getChannel(channelName){
		_activeChat = channelName;
		channelName = channelName.toLowerCase().split(' ').join('');
		if(!fbConnect.channels[channelName]){
			return;
		}
		var _chatroom = new Firebase(fbConnect.root + fbConnect.channels[channelName].url);
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
		return fbConnect.channels;
	};

	this.sendChat = function (message) {
		if (!message) {
			return;
		}
		var chat = {
			body: message,
			//TODO: USER should be known already
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



