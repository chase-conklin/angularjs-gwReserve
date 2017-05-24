(function(angular) {
    angular
        .module("application")
        .service("exerciseService", function() {
            this.loggedInUser = {};
            this.login = _login;
            this.logout = _logout;
            this.printConsole = printConsole;

            function _login() {
                debugger;

                this.loggedInUser = {
                    name      : "Coolguy",
                    photo     : "https://unsplash.com/photos/gwHLF1zqQ9w",
                    loginTime : Date.now()
                }
            }

            function _logout () {
                this.loggedInUser = {};
            }

            function printConsole () {
                console.log("Service Works!")
            }
        })

        .factory("exerciseService", function() {
            return {
                getLoggedInUser,
                login,
                logout
            };

            let loggedInUser = {};

            function getLoggedInUser() {
                return loggedInUser;
            }

            function login() {
                debugger;
                
                loggedInUser = {
                    name      : "Ted",
                    photo     : "https://unsplash.com/photos/gwHLF1zqQ9w",
                    loginTime : Date.now()
                }
            }

            function logout () {
                loggedInUser = {};
            }

        });
}(window.angular));
