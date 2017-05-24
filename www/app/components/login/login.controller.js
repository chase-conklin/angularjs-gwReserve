(function (angular) {
    angular
        .module("application")
        .controller("loginComponentController", function($scope, loginService) {
            this.loginService = loginService;

            this.refresh = function () {
                $scope.$apply();
            }

        });
}(window.angular));
