(function (angular) {
    angular
        .module("application")
        .component("gwFooter", {
            templateUrl  : "www/app/components/footer/footer.htm",
            controller   : "footerComponentController",
            controllerAs : "ctrl"
        });
}(window.angular));
