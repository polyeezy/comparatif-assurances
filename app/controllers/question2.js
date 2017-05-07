angular.module('app').controller('q2Controller', ['$scope', '$rootScope', '$location',  function($scope, $rootScope, $location){

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

$scope.question ={
    "value"     : "Les services proposés par votre Protection Juridique. Les services proposés par l'assurance peuvent varier d'un contrat à un autre. Parmi les différents services proposés ci-après, indiquez les 5 services que vous attendez en priorité de votre assurance Protection Juridique",
    "responses" : [
                    {'value'        : "Du conseil juridique , indépendamment d'une situation de litige",
                      'diff'        : [5, 5, 5, 5, 5, 5, 5, 5, 5],
                      'correctifs'  : [
                      ],
                      'id' : 2.1
                    }, //1
                    { 'value' : "Du conseil juridique en cas de litige",
                    'diff'        : [5, 5, 5, 5, 5, 5, 5, 5, 5],
                      'correctifs'  : [
                      ],
                      'id' : 2.2
                    }, //2
                    {'value' : "L'intervention d'un juriste avec la partie adverse pour trouver une solution amiable ",
                    'diff'        : [5, 5, 5, 5, 5, 5, 5, 5, 5],
                      'correctifs'  : [



                      ],
                      'id' : 2.3
                    }, //3
                    {'value' : "Une bonne prise en charge des honoraires d'avocat en cas de procès",
                      'diff' : [2, 4, 6, 6, 4, 4, 4, 4, 4],
                      'correctifs'  : [


                      ],
                      'id' : 2.4}, //4

                    {'value' : "Un service d'aide et de conseil préalable à la signature de contrat ",
                      'diff' : [0, 5, 0, 0, 0, 0, 0, 0, 0],
                      'correctifs'  : [

                      ],
                      'id' : 2.5
                    }, //5
                    {'value' : "Le recours à un expert automobile avant l’achat d'un véhicule",
                      'diff' : [0, 0, 0, 0, 0, 0, 0, 0, 0],
                      'correctifs'  : [



                      ],
                      'id' : 2.6}, //6

                    {'value' : "Le recours à un expert immobilier avant l'achat d'un bien immobilier",
                      'diff' : [0, 5, 0, 0, 0, 0, 0, 0, 0],
                      'correctifs'  : [

                      ],
                      'id' : 2.7}, //7

                    {'value' : "La prise en charge des frais d'huissier pour exécuter un jugement ",
                      'diff' : [5, 5, 4, 4, 5, 5, 4, 4, 4],
                      'correctifs'  : [

                      ],
                      'id' : 2.8}, //8
                    {'value' : "La possibilité de prendre rendez-vous avec un juriste de votre assurance ",
                      'diff' : [0, 5, 0, 0, 0, 0, 0, 0, 0],
                      'correctifs'  : [



                      ],
                      'id' : 2.9}, //9
                    {'value' : "L'accès à une base d'informations juridiques ",
                      'diff' : [0, 0, 0, 0, 0, 0, 0, 0, 0],
                      'correctifs'  : [




                      ],
                      'id' : 2.10}, //10

                  ]
                }


$scope.checkChanged = function(response, item){
console.log('ok');
  console.log($rootScope.Assurances);

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
