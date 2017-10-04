(function() {
    function uCtrl($cookies, $uibModalInstance) {
      // Save the user provided username into a cookie.
      this.saveUser = function(username) {
          $cookies.put('blocChatCurrentUser', 'username');
          console.log('I am saving the cookie value as: ' + username);

      };
      // Retrieve the information (username) stored into a cookie.
      this.getUser = function() {
          console.log('I am getting the stored cookie value as: ' + $cookies.get('blocChatCurrentUser'));
          return $cookies.get('blocChatCurrentUser');
      };
      //Validate the user provided username before storing it.
      this.isValid = function(currentUser) {
          if(currentUser && currentUser !== '') {
              console.log(currentUser);
              this.saveUser(currentUser);
              $uibModalInstance.close();
          }
          else {
              alert("Invalid Username");
          }
      };
    };

    angular
        .module('blocChat')
        .controller('uCtrl', ['$cookies', '$uibModalInstance', uCtrl]);
})();
