(function() {
  function Room($firebaseArray) {
    var fireRef = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(fireRef);




    return {
        all: rooms,
        create: function(newRoom) {
            rooms.$add(newRoom);
        }
    };
  }

  angular
      .module('blocChat')
      .factory('Room', ['$firebaseArray', Room]);
})();
