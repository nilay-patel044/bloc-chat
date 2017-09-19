(function() {
		function HomeCtrl(Room) {
			console.log("Home Controller Loaded");
			this.chatRooms = Room.all;
			console.log(this.chatRooms);


		}

		angular
				.module('blocChat')
				.controller('HomeCtrl', ['Room', HomeCtrl]);
})();
