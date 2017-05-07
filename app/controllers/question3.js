angular.module('app').controller('q3Controller', ['$scope', '$rootScope', '$location', function($scope, $rootScope){

$scope.limit = 5;
$scope.checked = 0;


if (!$rootScope.Assurances)
{
  $location.path('/etape1');

  $rootScope.Assurances = [
    {"contract" : "-", "name" : "Caisse Epargne", "amiable" : 150 , "judiciaire" : 0,                "points"  : 0, "price" : 6.73}, // 0
    {"contract" : "-","name" : "Axa", "amiable" : 0                   ,        "points"  : 0, "price" : 6.25}, // 1
    {"contract" : "Vie Quotidienne","name" : "Allianz",  "amiable" : 100   , "judiciaire" : 0,   "points"  : 0, "price" : 6.10}, // 2
    {"contract" : "Vie Quotidienne plus","name" : "Allianz", "amiable" : 100  , "judiciaire" : 0,  "points"  : 0, "price" : 0}, // 3
    {"contract" : "-","name" : "Pacifica",   "amiable" : 150     , "judiciaire" : 0,               "points"  : 0, "price" : 6}, // 4
    {"contract" : "Formule Essentielle","name" : "GMF",   "amiable" : 150  , "judiciaire" : 0,   "points"  : 0, "price" : 6.42}, // 5
    {"contract" : "Formule Intégrales","name" : "GMF",  "amiable" : 150   , "judiciaire" : 0,    "points"  : 0, "price" : 0}, // 6
    {"contract" : "Vie Privée","name" : "Swiss Life",  "amiable" : 150   , "judiciaire" : 0,     "points"  : 0, "price" : 7.66}, // 7
    {"contract" : "Patrimoine","name" : "Swiss Life",  "amiable" : 150  , "judiciaire" : 0,      "points"  : 0, "price" : 15.33}, // 8
  ]
  $rootScope.maxPrice = 1000;
  $rootScope.checked = []
}

$scope.ApplyPrice = function(max)
{
  $rootScope.maxPrice = max;
  console.log($rootScope.maxPrice);
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
