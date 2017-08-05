angular.module('app').controller('resultController', ['$scope', '$rootScope', '$location', '$filter', '$http',  function($scope, $rootScope, $location, $filter, $http){

    $scope.ready = false;

    if (!$rootScope.Assurances) {
        $location.path('/etape1');
    }

    $scope.isChecked = function (id) {
        if ($rootScope.checked.indexOf(id.id) > -1){
            return true;
        }
    };

    $scope.optionIsValid = function(question, index, value){

        console.log(question.diff[index]);


        return (question.diff[index] === value)
    };

    $scope.franchise = function(id){
        return $rootScope.Assurances[1].franchise;
    };

    $scope.maxPrice = function (item) {
        return (item.price < $rootScope.maxPrice)
    };

// AXA
if ($rootScope.checked.indexOf(15) !== -1)
  $rootScope.Assurances[1].price = 11;

if ($rootScope.checked.indexOf(16) !== -1 || $rootScope.checked.indexOf(19) !== -1 || $rootScope.checked.indexOf(110) !== -1)
    $rootScope.Assurances[1].price = 13.75;

if ($rootScope.checked.indexOf(18) !== -1)
    $rootScope.Assurances[1].price = 21.25;

if (($rootScope.checked.indexOf(15) !== -1 && $rootScope.checked.indexOf(16) !== -1 ) || ($rootScope.checked.indexOf(110) !== -1) || ($rootScope.checked.indexOf(110) !== -1 && $rootScope.checked.indexOf(1.8) !== -1 ))
$rootScope.Assurances[1].price = 33.5;

//VQ
    if ($rootScope.checked.indexOf(15) !== -1)
        $rootScope.Assurances[2].price = 13;
//VQ+
    if ($rootScope.checked.indexOf(15) !== -1){

        $rootScope.Assurances[3].price = 22;

    }
//
    if ($rootScope.checked.indexOf(15) !== -1)
        $rootScope.Assurances[5].price = 12;

    if ($rootScope.checked.indexOf(15) !== -1)
        $rootScope.Assurances[6].price = 24;

//AMIABLE

    if ($rootScope.checked.indexOf(15) !== -1) {
        $rootScope.Assurances[2].amiable = 400;
        $rootScope.Assurances[3].amiable = 400;

    }
//JUDICIAIRE

    if ($rootScope.checked.indexOf(25) !== -1) {
        $rootScope.Assurances[2].judiciaire = 400;
        $rootScope.Assurances[3].judiciaire = 400;

    }
//FRANCHISE

    $rootScope.AssurancesSorted = $filter('orderBy')($rootScope.Assurances, 'points', 'reverse');

    $scope.res1 = $rootScope.AssurancesSorted[0];
    $scope.res2 = $rootScope.AssurancesSorted[1];
    $scope.res3 = $rootScope.AssurancesSorted[2];

    $http.get('assets/question1.json').then(function(response) {
        $scope.question1 = response.data;
    });
    $http.get('assets/question2.json').then(function(response) {
        $scope.question2 = response.data;
        $scope.ready = true;

    });

}]);
