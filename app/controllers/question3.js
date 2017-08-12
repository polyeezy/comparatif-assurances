angular.module('app').controller('q3Controller', ['$scope', '$rootScope', '$location', function($scope, $rootScope){

    $rootScope.maxPrice = 1000;

    console.log($rootScope);
    if (!$rootScope.Assurances) {
        $location.path('/etape1');
    }

    $scope.ApplyPrice = function(max) {
     $rootScope.maxPrice = max;
        console.log('max : ' + max);
    }

}]);
