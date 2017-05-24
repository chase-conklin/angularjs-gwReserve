( function(angular) {
	angular
		.module("application", ["ngRoute"])

		.constant("applicationSettings", {
			applicationTitle : "Geekwise Room Reserve App",

			getFirebaseRestUrl : function(suffix) {
				const prefix = "https://confdeconflictor.firebaseio.com/";
				const ext = ".json";

				return prefix + suffix + ext;
			},

			getImagePath : function(file) {
				return `www/assets/images/${file}`;
			}
		})

		.config(function($locationProvider, $routeProvider) {
			$locationProvider.html5Mode(true);

			$routeProvider
				// .when("/welcome", {
				// 	templateUrl  : "www/app/partials/welcome.htm"
				// })
				// .when("/exercise1", {
				// 	// simple controller
				// 	templateUrl  : 'www/app/partials/exercise1.htm',
				// 	controller   : "exerciseOneController",
				// 	controllerAs : "ctrl",
				// })
				// .when("/exercise2", {
				// 	// more complex controller
				// 	templateUrl  : 'www/app/partials/exercise2.htm',
				// 	controller   : "exerciseTwoController",
				// 	controllerAs : "ctrl"
				// })
				.when("/login", {
					template  : "<gw-login></gw-login>"
				})
				.when("/room/:id", {
					// resolve   : {
					// 	isLoggedIn : function ($location, loginService) {
					// 		return !loginService.getLoggedInUser() ? $location.path("/welcome") : true;
					// 	}
					// },
					template  : "<gw-room></gw-room>"
				})
				.otherwise({
					templateUrl  : "www/app/components/welcome/welcome.htm"
				});
		});
} (window.angular));
