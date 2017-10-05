(function() {

		function HomeCtrl(Room, Message) {
				this.rooms = Room.all;
				// Change rooms to access the content(messages in the view) of different rooms.
				this.changeRoom = function(room) {
						this.currentRoom = room;
						this.messages = Message.getByRoomId(room.$id);
				};
				this.send = Message.send;
				


		}

		angular
				.module('blocChat')
				.controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
})();
