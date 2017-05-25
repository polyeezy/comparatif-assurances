angular.module('app').controller('q2Controller', ['$scope', '$rootScope', '$location',  function($scope, $rootScope, $location){

$scope.limit = 5;
$scope.checked = 0;



if (!$rootScope.Assurances)
{
    $rootScope.maxPrice = 1000;
    $rootScope.checked = []

  $location.path('/etape1');


}

$scope.question ={
    "value"     : "Les services proposés par votre Protection Juridique. Les services proposés par l'assurance peuvent varier d'un contrat à un autre. Parmi les différents services proposés ci-après, indiquez les 5 services que vous attendez en priorité de votre assurance Protection Juridique",
    "responses" : [
                    {'value'        : "Du conseil juridique , indépendamment d'une situation de litige",
                      'diff'        : [5, 5, 5, 5, 5, 5, 5, 5, 5],
                      'correctifs'  : [
                      ],
                      'id' : 21
                    }, //1
                    { 'value' : "Du conseil juridique en cas de litige",
                    'diff'        : [5, 5, 5, 5, 5, 5, 5, 5, 5],
                      'correctifs'  : [
                      ],
                      'id' : 22
                    }, //2
                    {'value' : "L'intervention d'un juriste avec la partie adverse pour trouver une solution amiable ",
                    'diff'        : [5, 5, 5, 5, 5, 5, 5, 5, 5],
                      'correctifs'  : [



                      ],
                      'id' : 23
                    }, //3
                    {'value' : "Une bonne prise en charge des honoraires d'avocat en cas de procès",
                      'diff' : [2, 4, 6, 6, 4, 4, 4, 4, 4],
                      'correctifs'  : [


                      ],
                      'id' : 24}, //4

                    {'value' : "Un service d'aide et de conseil préalable à la signature de contrat ",
                      'diff' : [0, 5, 0, 0, 0, 0, 0, 0, 0],
                      'correctifs'  : [

                      ],
                      'id' : 25
                    }, //5
                    {'value' : "Le recours à un expert automobile avant l’achat d'un véhicule",
                      'diff' : [0, 0, 0, 0, 0, 0, 0, 0, 0],
                      'correctifs'  : [



                      ],
                      'id' : 26}, //6

                    {'value' : "Le recours à un expert immobilier avant l'achat d'un bien immobilier",
                      'diff' : [0, 5, 0, 0, 0, 0, 0, 0, 0],
                      'correctifs'  : [

                      ],
                      'id' : 27}, //7

                    {'value' : "La prise en charge des frais d'huissier pour exécuter un jugement ",
                      'diff' : [5, 5, 4, 4, 5, 5, 4, 4, 4],
                      'correctifs'  : [

                      ],
                      'id' : 28}, //8
                    {'value' : "La possibilité de prendre rendez-vous avec un juriste de votre assurance ",
                      'diff' : [0, 5, 0, 0, 0, 0, 0, 0, 0],
                      'correctifs'  : [



                      ],
                      'id' : 29}, //9
                    {'value' : "L'accès à une base d'informations juridiques ",
                      'diff' : [0, 0, 0, 0, 0, 0, 0, 0, 0],
                      'correctifs'  : [




                      ],
                      'id' : 210}, //10

                  ]
                }


$scope.checkChanged = function(response, item){

    if(item)
    {
      $rootScope.checked.push(response.id)

      if ($rootScope.checked.indexOf(response.id) == -1) {
        $rootScope.checked.push(response.id);
      }

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

      var index = $rootScope.checked.indexOf(response.id);
      $rootScope.checked.splice(index, 1);
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
