angular.module('app').controller('q1Controller', ['$scope', '$rootScope', function($scope, $rootScope){

$scope.limit = 5;
$scope.checked = 0;



if (!$rootScope.Assurances)
{$rootScope.Assurances =
    [{"contract" : "-", "name" : "Caisse Epargne", "amiable" : 150 , "judiciaire" : 0,                "points"  : 0, "price" : 6.73}, // 0
    {"contract" : "-","name" : "Axa", "amiable" : 0                   ,        "points"  : 0, "price" : 6.25}, // 1
    {"contract" : "Vie Quotidienne","name" : "Allianz",  "amiable" : 100   , "judiciaire" : 0,   "points"  : 0, "price" : 6.58}, // 2
    {"contract" : "Vie Quotidienne plus","name" : "Allianz", "amiable" : 100  , "judiciaire" : 0,  "points"  : 0, "price" : 16}, // 3
    {"contract" : "-","name" : "Pacifica",   "amiable" : 150     , "judiciaire" : 0,               "points"  : 0, "price" : 7}, // 4
    {"contract" : "Formule Essentielle","name" : "GMF",   "amiable" : 150  , "judiciaire" : 0,   "points"  : 0, "price" : 6.42}, // 5
    {"contract" : "Formule Intégrales","name" : "GMF",  "amiable" : 150   , "judiciaire" : 0,    "points"  : 0, "price" : 18}, // 6
    {"contract" : "Vie Privée","name" : "Swiss Life",  "amiable" : 150   , "judiciaire" : 0,     "points"  : 0, "price" : 7.66}, // 7
    {"contract" : "Patrimoine","name" : "Swiss Life",  "amiable" : 150  , "judiciaire" : 0,      "points"  : 0, "price" : 15.33}, // 8
  ]
  $rootScope.maxPrice = 1000;
  $rootScope.checked = []


}

$rootScope.question ={
    "value"     : "Parmi ces situations, indiquez les 5 que vous souhaitez voir en priorité couvertes par votre assurance Protection juridique",
    "responses" : [
                    {
                      'value'        : "Litige avec un professionnel suite à l'achat d'un bien",
                      'diff'        : [20, 20, 20, 20, 20, 20, 20, 20, 20],
                      'correctifs'  : [
                        [-1, 0, -1, -1, -1, -1, -1, 0, 0],
                        [-1, -3, -1, -1, -1, -1, -1, 1, 1],
                        [0, 0, 0, 0, 0, -2, -2, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, -7, 0]
                      ],
                      'id' : 11
                    }, //1
                    { 'value' : "Litige de voisinage",
                      'diff' : [20, 20, 20, 20, 20, 20, 20, 0, 20],
                      'correctifs'  : [
                        [-1, 0, -1, -1, -1, -1, -1, 0, 0],
                        [-1, -3, -1, -1, -1, -1, -1, 0, -1],
                        [0, -3, 0, 0, 0, -2, -2, 0, 0],
                        [0, -3, 0, 0, 0, -2, -2, 0, 0]
                      ],
                      'id' : 12
                    }, //2
                    {'value' : "Litige avec votre employeur",
                      'diff' : [20, 20, 20, 20, 20, 20, 20, 0, 20],
                      'correctifs'  : [
                        [-1, 0, -1, -1, -1, -1, -1, 0, 0],
                        [-1, -3, -1, -1, -1, -1, -1, -1, -1],
                        [0, -3, 0, 0, 0, -2, -2, 0, 0],
                        [-2, -1, -1, -1, -1, -1, -1, -1, -1],
                      ],
                      'id' : 13
                    }, //3
                    {'value' : "Litige avec votre propriétaire",
                      'diff' : [20, 20, 20, 20, 20, 20, 20, 20, 20],
                      'correctifs'  : [
                        [-1, 0, -1, -1, -1, -1, -1, 0, 0],
                        [-1, -3, -1, -1, -1, -1, -1, -1, -1],
                        [0, 0, 0, 0, 0, -2, -2, 0, 0],
                        [0, -2, 0, 0, 0, 0, 0, 0, 0]

                      ]
                      ,
                      'id' : 14
                    }, //4

                    {'value' : "Litige avec votre locataire",
                      'diff' : [0, 20, 20, 20, 0, 20, 20, 0, 20],
                      'correctifs'  : [
                        [0, 0, -3, -3, 0, -1, -1, 0, 0],
                        [0, -3, -3, -3, 0, -1, -1, 0, -1],
                        [0, 0, 0, 0, 0, -2, -2, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0]
                      ],
                      'id' : 15
                    }, //5
                    {'value' : "Ltige avec un héritier dans le cadre de la succession d'un proche",
                      'diff' : [20, 20, 0, 20, 20, 20, 20, 0, 20],
                      'correctifs'  : [
                        [-1, 0, 0, -1, -1, -1, -1, 0, 0],
                        [-1, -3, -1, -1, -1, -1, -1, 1, -1],
                        [0, 0, 0, 0, 0, -2, -2, 0, -5],
                        [0, 0, 0, 0, -1, 0, 0, 0, -1]
                      ]
                      ,
                      'id' : 16
                    }, //6

                    {'value' : "Litige avec un professionnel de la santé (médecin, dentiste, chirurgien) suite à une intervention médicale",
                      'diff' : [20, 20, 20, 20, 20, 20, 20, 20, 20],
                      'correctifs'  : [
                        [-1, 0, -1, -1, -1, -1, -1, 0, 0],
                        [-1, -3, -1, -1, -1, -1, -1, -1, -1],
                        [0, 0, 0, 0, 0, -2, -2, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0]
                      ]
                      ,
                      'id' : 17
                    }, //7

                    {'value' : "Litige avec votre constructeur ",
                      'diff' : [0, 20, 20, 20, 0, 0, 20, 20, 20],
                      'correctifs'  : [
                        [0, 0, -1, -1, 0, 0, -1, 0, 0],
                        [0, -3, -1, -1, 0, 0, -1, -1, -1],
                        [0, 0, -5, -5, 0, 0, -4, -5, -5],
                        [0, -2, -4, -4, 0, 0, -4, 0, 0]
                      ]
                      ,
                      'id' : 18
                    }, //8
                    {'value' : "Divorce, rupture de PACS ou d'union libre ",
                      'diff' : [0, 20, 0, 20, 0, 0, 20, 0, 0],
                      'correctifs'  : [
                        [0, 0, 0, -1, 0, 0, -1, 0, 0],
                        [0, -3, 0, -1, 0, 0, -1, 0, 0],
                        [0, -3, 0, -5, 0, 0, -4, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0]


                      ]
                      ,
                      'id' : 19
                    }, //9
                    {'value' : "Action en paiement d'une pension alimentaire ",
                      'diff' : [0, 20, 0, 20, 0, 0, 20, 0, 0],
                      'correctifs'  : [
                        [0, 0, 0, -1, 0, 0, -1, 0, 0],
                        [0, -3, 0, -1, 0, 0, -1, 0, 0],
                        [0, -3, 0, -5, 0, 0, -4, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0]



                      ]
                      ,
                      'id' : 110
                    }, //10

                    {'value' : "Litige avec votre assistante maternelle ou votre employé(e) de maison",
                      'diff' : [20, 20, 20, 20, 20, 20, 20, 20, 20],
                      'correctifs'  : [
                        [-1, 0, -1, -1, -1, -1, -1, 0, 0],
                        [-1, -3, -1, -1, -1, -1, -1, -1, -1],
                        [0, 0, 0, 0, 0, -2, -2, 0, 0],
                        [-3, -2, -4, -4, -2, 0, 0, 0, 0]



                      ]
                      ,
                      'id' : 111
                    }, //11
                    {'value' : "Litige avec le fisc (redressement fiscal)",
                      'diff' : [20, 20, 20, 20, 20, 20, 20, 0, 20],
                      'correctifs'  : [
                        [-1, 0, -1, -1, -1, -1, -1, 0, 0],
                        [-1, -3, -1, -1, -1, -1, -1, 0, -1],
                        [0, -3, 0, 0, 0, -2, -2, 0, 0],
                        [-3, -2, -4, -4, -2, 0, 0, 0, 0]



                      ]
                      ,
                      'id' : 112
                    }, //12
                    {'value' : "Contestation d'une infraction au code de la route ",
                      'diff' : [0, 0, 0, 20, 0, 0, 0, 0, 0],
                      'correctifs'  : [
                        [0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0]


                      ],
                      'id' : 113
                    }, //13
                    {'value' : "Litige en votre qualité de caution",
                      'diff' : [20, 20, 0, 20, 0, 0, 20, 0, 0],
                      'correctifs'  : [
                        [-1, 0, 0, -1, 0, 0, -1, 0, 0],
                        [-1, -3, 0, -1, 0, 0, -1, 0, 0],
                        [0, 0, 0, 0, 0, 0, -2, 0, 0],
                        [-3, -3, 0, 0, 0, 0, -4, 0, 0]

                      ]
                      ,
                      'id' : 114
                    }, //14
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
