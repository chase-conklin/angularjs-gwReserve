(function (angular) {
    angular
        .module("application")
        .controller("exerciseOneController", function($routeParams, exerciseService) {

            this.exerciseService = exerciseService;

    		this.title = "Exercise 1, in the controller";

    		this.clickAction = () => {
    			console.log(this);
    		};

    		this.students = [
    			{ name: "John" },
    			{ name: "Josh" },
    			{ name: "Mack" }
    		];
        })
}(window.angular))
