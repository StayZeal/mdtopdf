var app = angular.module("indexapp", [
    'ngRoute'
    // 'ngSanitize',
    // 'wiz.markdown'
]);

// app.config(["$routeProvider", function ($routeProvider) {
//
//     $routeProvider
//         .when("/edit", {templateUrl: "/edit.html"})
//         .otherwise({redirectTo: '/'});
//
// }]);

app.controller("editContorller",function ($scope, $http) {

    $scope.start = function () {
        console.log("execute.......");
        $http({
            method: "get",
            url: "http://localhost:8081/start",
            // data: {content: $scope.resume},
            // responseType:"arraybuffer"

        }).then(function successCallback(response, status, header, config) {

                console.log(response.data);
            }, function errorCallback(response) {
                console.error(response)
            }
        );

    }
    
});
