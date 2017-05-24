(function (angular) {
    angular
        .module("application")
        .component("gwRoomReservationHeader", {
            templateUrl  : "www/app/components/room/room-reservation-header/room-reservation-header.htm",
            controller   : "roomReservationHeaderComponentController",
            controllerAs : "ctrl",
            bindings     : {
                room : "@"
            }
        });
}(window.angular));
