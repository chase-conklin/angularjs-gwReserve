(function (angular) {
    angular
        .module("application")

        .controller("roomReservationFormComponentController", function(roomService) {
            this.$onInit = function () {
                this.startTime = new Date();
                this.startTime.setHours(0, 0, 0, 0);

                this.endTime = new Date();
                this.endTime.setHours(0, 0, 0, 0);

                this.reserveReasons = [
                    "Birthday",
                    "Conference",
                    "Interview",
                    "Scrum Meeting",
                    "Honeymoon"
                ];
            }

            this.roomSubmission = function() {

                console.log("Reserving for", this.room);
                console.log(this.myForm);

				if (this.getMinTime() >= this.endTime) {
					this.myForm.endTime.$setValidity("min", false)

					return alert("Message from controller: time invalid");
				}

				if (this.myForm.$invalid) return alert("Message from controller: form invalid");

                //take the pieces of myForm and merge them to this.room.reservations collection

                const reservationSubmission = {};
                reservationSubmission.email = this.email1;
                reservationSubmission.startTime = this.startTime;
                reservationSubmission.endTime = this.endTime;
                reservationSubmission.specialInstructions = this.specialInstructions;
                reservationSubmission.reserveReason = this.reserveReason;

                return roomService.writeRoomReservation(this.room.id, reservationSubmission)
                    // .then(this.onSubmitted())
                    .catch(response => alert(response.data.error));

				alert("Room submitted");
			}

			this.getMinTime = function() {
				let date = new Date(this.startTime);
				date.setHours(date.getHours() + 1);

				return date;
			};
        });
}(window.angular));
