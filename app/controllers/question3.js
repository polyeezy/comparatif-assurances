angular.module('app').controller('q3Controller', ['$scope', '$rootScope', '$location', function($scope, $rootScope){

    if (!$rootScope.Assurances) {
        $location.path('/etape1');
    }

    $scope.ApplyPrice = function(max) {
     $rootScope.maxPrice = max;
    }

}]);
