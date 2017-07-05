angular.module("mainApp")
    .controller("introCtrl", ["$location", "$timeout", function ($location, $timeout) {
        function redirect() {
            $location.path("/home")
        };
        $timeout(redirect, 20000)
    }]);