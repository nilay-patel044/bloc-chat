(function() {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/usernameModal.html',
                contoller: 'usernameModalInstanceCtrl',
                controllerAs: 'modalUN',
                backdrop: 'static',
                keyboard: false
            });

            modalInstance.result.then(function(username) {
                this.username = username;
                $cookies.put('blocChatCurrentUser', this.username);
                var currentUser = $cookies.get('blocChatCurrentUser');
                console.log(currentUser);
            });
        }
    };

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
