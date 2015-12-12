app.controller('MessagesCtrl', function (profile, channelName, messages) {
		var messagesCtrl = this;
		
		messagesCtrl.getRandonImage = function(){
			var g = ['guy-1','guy-2','guy-3','guy-4','guy-5','guy-6','guy-7','guy-8','guy-9','woman-2','woman-3', 'woman-1', 'woman-4', 'woman-5','woman-6','woman-7','woman-8','woman-9','woman-10'];
			var ri = Math.floor(Math.random() * g.length - 1);
			return g[ri];
		}
		
		messagesCtrl.messages = messages;
		messagesCtrl.channelName = channelName;
		messagesCtrl.message = '';
		messagesCtrl.sendMessage = function () {
			if (messagesCtrl.message.length > 0) {
				messagesCtrl.messages.$add({
					uid: profile.$id,
					body: messagesCtrl.message,
					timestamp: Firebase.ServerValue.TIMESTAMP
				}).then(function () {
					messagesCtrl.message = '';
				});
			}
		};
	});
