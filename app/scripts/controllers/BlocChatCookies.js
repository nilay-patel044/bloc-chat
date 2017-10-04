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
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
