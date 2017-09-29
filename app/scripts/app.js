
(function() {
    function config($locationProvider, $stateProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
             });

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            });
    };

    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        console.log(currentUser);

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
         .module('blocChat', ['ngCookies', 'ui.bootstrap', 'ui.router', 'firebase'])
         .config(config)
         .run(['$cookies', 'uibModal', BlocChatCookies])
})();
