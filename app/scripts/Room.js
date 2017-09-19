(function() {
  function Room($firebaseArray) {
    var fireRef = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(fireRef);



    console.log($firebaseArray);
    console.log(fireRef);
    console.log(rooms);
    console.log(Room);
    return {
      all: rooms
    };
  }

  angular
      .module('blocChat')
      .factory('Room', ['$firebaseArray', Room]);
})();
