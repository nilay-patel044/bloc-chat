(function() {

		function HomeCtrl(Room, Message, $cookies) {
				this.rooms = Room.all;
				// Change rooms to access the content(messages in the view) of different rooms.
				this.changeRoom = function(room) {
						this.currentRoom = room;
						this.messages = Message.getByRoomId(room.$id);
				};

				this.sendMessage = function(message) {
						message.username = $cookies.get('blocChatCurrentUser');

						message.roomId = this.currentRoom.$id;
						Message.send(message);
						//

				};

				// this.auth = Authorization;

				// this.currentUser = Authorization.getCurrentUser();
				// console.log(this.currentUser);
				//
				// this.currentUser = BlocChatCookies.getCurrentUser();
				//
				// this.saveUserName = function(username) {
				// 		BlocChatCookies.saveUserName(username);
				// 		this.currentUser = BlocChatCookies.getCurrentUser();
				// };



		};

		angular
				.module('blocChat')
				.controller('HomeCtrl', ['Room', 'Message', '$cookies', HomeCtrl]);
})();
