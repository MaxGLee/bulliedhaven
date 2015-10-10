app.service('ChatService', ChatService);

function ChatService(fbConnect, $firebaseObject, $firebaseArray){
	var _chatroom = new Firebase(fbConnect.root + 'chats');
	var fb_chats = $firebaseArray(_chatroom);
	var fb_chatroom = $firebaseObject(_chatroom);
	
	this.getChats = function(){
		return fb_chats;
	};
	
	this.sendChat = function(message){
		if(!message){
			return;
		}
		var chat = {
			body: message,
			//TODO: USER should be known already
			timestamp: Date.now()
		}
		fb_chats.$add(chat);
	}
	
	// this.kickUser = function(user, personToKick){
	// 	if(!user.isMod()){
	// 		return;
	// 	}
	// 	fb_chatroom.users[personToKick.id].$remove();
	// 	fb_chatroom.$save();
	// }
	
}



