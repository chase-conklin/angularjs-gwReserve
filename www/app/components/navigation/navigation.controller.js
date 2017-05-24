(function (angular) {
    angular
        .module("application")
        .controller("navigationComponentController", function($scope, $location, navigationService, loginService, roomService) {
            this.$onInit = function () {
                this.navigationService = navigationService;
                this.loginService = loginService;
                this.roomService = roomService;

                this.refresh = function () {
                    $scope.$apply();
                }

                let welcomeItem = {
                    title: "Welcome",
                    url  : "/welcome"
                }

                this.navigationService.addNavigationItem(welcomeItem);

                roomService.fetchRoomsFromDB().then(rooms => {
                    angular.forEach(rooms, function (objectValue) {
                        const itemToAdd = {
                            title: objectValue.name,
                            url  : `/room/${objectValue.id}`
                        };

                        navigationService.addNavigationItem(itemToAdd);
                    });
                }).catch(e => console.error(e));

                let aboutItem = {
                    title: "About",
                    url  : "/about"
                };

                navigationService.addNavigationItem(aboutItem);

            }

            this.isItemActive = function (url) {
                return url === $location.path()
            }

        });
}(window.angular));
