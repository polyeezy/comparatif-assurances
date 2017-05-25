angular.module('app').controller('q3Controller', ['$scope', '$rootScope', '$location', function($scope, $rootScope){

$scope.limit = 5;
$scope.checked = 0;


if (!$rootScope.Assurances)
{
    $rootScope.maxPrice = 1000;
    $rootScope.checked = []

  $location.path('/etape1');


}

$scope.ApplyPrice = function(max)
{
  $rootScope.maxPrice = max;
}

$scope.checkChanged = function(response, item){
    if(item)
    {
      for (i = 0; i < response.diff.length; i++)
      {
        $scope.Assurances[i].points += response.diff[i];
      }

      for (j = 0; j < response.correctifs.length; j++)
      {
        for (idx = 0; idx < response.correctifs[j].length; idx++)
        $scope.Assurances[idx].points += response.correctifs[j][idx];
      }
      $scope.checked++;
        console.log($rootScope.Assurances[0].name + ' ' + $rootScope.Assurances[0].points);

    }
    else
    {
      var i = 0;

      while (i < response.diff.length)
      {
        $scope.Assurances[i].points -= response.diff[i];
        i++;
      }
      for (j = 0; j < response.correctifs.length; j++)
      {
        for (idx = 0; idx < response.correctifs[j].length; idx++)
        $scope.Assurances[idx].points -= response.correctifs[j][idx];
      }
      $scope.checked--;
    }
}

}]);
