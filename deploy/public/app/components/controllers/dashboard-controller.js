app.controller('DashboardController', DashboardController);

function DashboardController($scope, ChatService) {
	$scope.chats = ChatService.getChats();
	$scope.channels = ChatService.getChannels();
	$scope.changeChannel = function (channelName) {
		$scope.chats = ChatService.changeChannel(channelName);
	}
	$scope.sendChat = function () {
		if ($scope.newChat) {
			ChatService.sendChat($scope.user, $scope.newChat);
			$scope.newChat = '';
		}
	}

	$scope.isActive = function (channel) {
		if (ChatService.getActiveChat() === channel.name) {
			return true;
		}
	}


}