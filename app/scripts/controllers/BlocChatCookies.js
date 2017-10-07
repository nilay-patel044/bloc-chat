(function() {
  function BlocChatCookies($cookies, $uibModal) {
      var currentUser = $cookies.get('blocChatCurrentUser');
      if (!currentUser || currentUser === '') {
          $uibModal.open({
              templateUrl: 'templates/u.html',
              controller: 'uCtrl',
              controllerAs: 'cookieThis',
              show: true,
              keyboard: false,
              backdrop: 'static'
          });

        }
        //
        // var getCurrentUser = function() {
        //     return $cookies.get('blocChatCurrentUser');
        // };
        //
        // var saveUserName = function (username) {
        //     $cookies.put('blocChatCurrentUser', username);
        // };
        //
        // return {
        //     saveUserName: saveUserName,
        //     getCurrentUser: getCurrentUser
        // };
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
