(function() {
    function usernameModalInstanceCtrl($uibModalInstance) {
        this.ok = function (isValid) {
            if (isValid) {
                $uibModalInstance.close(this.username);
            }
        };
    }

    angular
        .module('blocChat')
        .controller('usernameModalInstanceCtrl', ['$uibModalInstance', usernameModalInstanceCtrl]);
})();
