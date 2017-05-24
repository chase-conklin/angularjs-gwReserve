(function (angular) {
	angular
		.module("application")

		.controller("roomComponentController", function (applicationSettings, roomService, $routeParams) {
			this.$onInit = function() {
				console.log(this);

				this.loading = true;

				roomService.getRoomById($routeParams.id).then(roomResult => {
					this.room = roomResult;
					this.room.picture = applicationSettings.getImagePath(this.room.picture);
					this.loading = false;
				});
			}
		});
}(window.angular));
