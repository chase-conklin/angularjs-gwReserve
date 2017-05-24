(function(angular) {
    angular
        .module("application")

        .factory("roomService", function($http, applicationSettings) {
            return {
                writeRoomReservation,
                getRooms,
                getRoomById,
                fetchRoomsFromDB
            };

            let rooms = null;

            function getRooms() {
                return rooms;
            }

            function getRoomById(id) {
                return $http.get(applicationSettings.getFirebaseRestUrl(`rooms/${id}`))
                    .then(response => response.data)
                    .then(data => {
                        data.id = id;
                        return data;
                    });
            }

            function fetchRoomsFromDB() {
                return $http.get(applicationSettings.getFirebaseRestUrl("rooms"))
                    .then(response => response.data)
                    .then(rooms => {
                        angular.forEach(rooms, function(value, key){
                            value.id = key;
                        });

                        return rooms;
                    });
            }

            function writeRoomReservation(id, reservation) {
				return getRoomById(id)
					.then(room => {
						// we get room so some validation could be performed here before we post, though note this doesn't
						// eliminate race conditions

						// currently, this just posts to the current date because nothing is passed in getRoomDateKey
						return $http.post(applicationSettings.getFirebaseRestUrl(`rooms/${id}/reservations/${getRoomDateKey()}`), reservation);
					})
                    .catch(error => console.log(error))
			}

			function getRoomDateKey(date) {
				let dateKey;

				dateKey = date ? new Date(date).toDateString() : new Date().toDateString();
				dateKey = dateKey.replace(/ /g, "");

				return dateKey;
			}
        });
}(window.angular));
