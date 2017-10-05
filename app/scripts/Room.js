(function() {
  function Room($firebaseArray) {
    var fireRef = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(fireRef);

    var getMessages = function(roomId) {
        var messages = firebase.database().ref().child("messages");
        return $firebaseArray(messages.orderByChild("roomId").equalTo(roomId));
    };

    // var create = function(newRoom) {
    //     rooms.$add({name: newRoom});
    // };
    return {
        all: rooms,
        create: function(newRoom) {
            rooms.$add({name: newRoom});
        },
        rooms,
        getMessages
        // create()
    };
  }

  angular
      .module('blocChat')
      .factory('Room', ['$firebaseArray', Room]);
})();
