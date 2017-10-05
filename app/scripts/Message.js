(function() {
  function Message($firebaseArray, $cookies, $filter) {

    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    return {
        getByRoomId: function(roomId) {
            return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
        },
        send: function(newMessage, currentRoom) {
            var date = new Date();
            var post = {
                content: newMessage,
                username: $cookies.get('blocChatCurrentUser'),
                roomId: currentRoom.$id,
                sentAt: $filter('date')(date, 'shortTime')
            };
            messages.$add(post);
            this.message = '';
        }
    };
    // Message.getByRoomId = function(roomId) {
    //     return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
    // };
    //
    // Message.send = function(newMessage, currentRoom) {
    //     messages.$add({
    //         content: newMessage,
    //         username: $cookies.get('blocChatCurrentUser'),
    //         sentAt: "date time",
    //         roomId: currentRoom.get($id)
    //     });
    // }
    //
    // return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', '$filter', Message]);
})();
