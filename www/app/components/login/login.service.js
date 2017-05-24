(function(angular) {
    angular
        .module("application")
        .factory("loginService", function($rootScope) {
            let loggedInUser = null;
            let notifyControllerCallback = null;

            // watches firebase authentication
            firebase.auth().onAuthStateChanged(updateLoginStatus);

            return {
                getLoggedInUser,
                login,
                logout
            }

            function getLoggedInUser() {
                return loggedInUser
            }

            function updateLoginStatus(authenticatedUser) {
                loggedInUser = authenticatedUser;
                $rootScope.$apply();
            }

            function login (callback) {
                return firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider());
            }

            function logout () {
                loggedInUser = {};
                return firebase.auth().signOut();
            }
        });
}(window.angular));
