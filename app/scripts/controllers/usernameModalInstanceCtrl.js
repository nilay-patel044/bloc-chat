(function() {
    function usernameModalInstanceCtrl($uibModalInstance) {

        this.ok = function(isValid) {

            if (isValid) {
              // save the cookie
                $uibModalInstance.close(username);
            }

        };
    }

    angular
        .module('blocChat')
        .controller('usernameModalInstanceCtrl', ['$uibModalInstance', usernameModalInstanceCtrl]);
})();
