(function (angular) {
    angular
        .module("application")
        .controller("exerciseTwoController", function($routeParams, exerciseService, exerciseTwoService) {
            this.exerciseTwoService = exerciseTwoService;

            this.exerciseService = exerciseService;

            this.title = "Exercise 2";

            const originalButtonText = "Button Text";

            this.possibleColors = [
                {
                    name : "Brown",
                    hex  : "#a52a2a"
                },
                {
                    name : "Blue",
                    hex  : "#0000ff"
                },
                {
                    name : "Gainsboro",
                    hex  : "#dcdcdc"
                }
                ];

            this._getRandomColorFromCollection = () => {
                let randomColor = this.possibleColors[Math.floor(Math.random() * this.possibleColors.length)]
                return randomColor;
            }

            this.colorFilterChanged = () => {
                if(!this.filter.color) delete this.filter.color;
            };

            this.buttonText = originalButtonText;

            this.buttonMouseEnter = function(arg) {
                this.buttonText = "Rolled Over"
            };

            this.buttonResetClick = () => {
                this.buttonText = originalButtonText;
            };


            this._createObject = () => {
                return {
                    name       : "Obj" + (this.objectArray.length + 1),
                    clickCount : 0,
                    color      : this._getRandomColorFromCollection().hex
                }
            };

            this.objectArray = [];

            this.controllerInitObject = this._createObject();

            this.objectArray.push(this.controllerInitObject);

            this.addNewObject = function() {
                this.objectArray.push(this._createObject());
                console.log(this.objectArray);
            };

            this.incrClickCount = function(obj) {
                obj.clickCount++;
                console.log([obj.name, obj.clickCount]);
            };

        });
}(window.angular))
