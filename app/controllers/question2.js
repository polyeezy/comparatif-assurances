angular.module('app').controller('q2Controller', ['$scope', '$rootScope', '$location', '$http',  function($scope, $rootScope, $location, $http) {

    $rootScope.nbCheck = 0;

    $http.get('assets/config.json').then(function(response) {
        $rootScope.conf = response.data;
    });

    if (!$rootScope.Assurances) {
        $location.path('/etape1');
    }

    $http.get('assets/question2.json').then(function(response) {
        $scope.question = response.data;
    });

}]);
