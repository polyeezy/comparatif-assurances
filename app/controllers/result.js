
angular.module('app').filter('checked', function(id) {
  return function (id) {
    return $rootScope.checked.indexOf(id) >= 0;
  };
});

angular.module('app').controller('resultController', ['$scope', '$rootScope', '$location', '$filter',  function($scope, $rootScope, $location, $filter){

$scope.limit = 5;
$scope.checked = 0;

$scope.question1 ={
    "value"     : "Parmi ces situations, indiquez les 5 que vous souhaitez voir en priorité couvertes par votre assurance Protection juridique",
    "responses" : [
                    {'value'        : "Litige avec un professionnel suite à l'achat d'un bien",
                      'diff'        : [20, 20, 20, 20, 20, 20, 20, 20, 20],
                      'correctifs'  : [
                        [-1, 0, -1, -1, -1, -1, -1, 0, 0],
                        [-1, -3, -1, -1, -1, -1, -1, 1, 1],
                        [0, 0, 0, 0, 0, -2, -2, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, -7, 0]
                      ],
                      'id' : 1.1
                    }, //1
                    { 'value' : "Litige de voisinage",
                      'diff' : [20, 20, 20, 20, 20, 20, 20, 0, 20],
                      'correctifs'  : [
                        [-1, 0, -1, -1, -1, -1, -1, 0, 0],
                        [-1, -3, -1, -1, -1, -1, -1, 0, -1],
                        [0, -3, 0, 0, 0, -2, -2, 0, 0],
                        [0, -3, 0, 0, 0, -2, -2, 0, 0]
                      ],
                      'id' : 1.2
                    }, //2
                    {'value' : "Litige avec votre employeur",
                      'diff' : [20, 20, 20, 20, 20, 20, 20, 0, 20],
                      'correctifs'  : [
                        [-1, 0, -1, -1, -1, -1, -1, 0, 0],
                        [-1, -3, -1, -1, -1, -1, -1, -1, -1],
                        [0, -3, 0, 0, 0, -2, -2, 0, 0],
                        [-2, -1, -1, -1, -1, -1, -1, -1, -1],
                      ],
                      'id' : 1.3
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
                      'id' : 1.4
                    }, //4

                    {'value' : "Litige avec votre locataire",
                      'diff' : [0, 20, 20, 20, 0, 20, 20, 0, 20],
                      'correctifs'  : [
                        [0, 0, -3, -3, 0, -1, -1, 0, 0],
                        [0, -3, -3, -3, 0, -1, -1, 0, -1],
                        [0, 0, 0, 0, 0, -2, -2, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0]
                      ],
                      'id' : 1.5
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
                      'id' : 1.6
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
                      'id' : 1.7
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
                      'id' : 1.8
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
                      'id' : 1.9
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
                      'id' : 1.10
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
                      'id' : 1.11
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
                      'id' : 1.2
                    }, //12
                    {'value' : "Contestation d'une infraction au code de la route ",
                      'diff' : [0, 0, 0, 20, 0, 0, 0, 0, 0],
                      'correctifs'  : [
                        [0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0]


                      ],
                      'id' : 1.13
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
                      'id' : 1.14
                    }, //14
                  ]
                };


              $scope.question2 =
                {
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
                };

$scope.isChecked = function (id)
{

  return $rootScope.checked.indexOf(id.id) >= 0;
}

$scope.optionIsValid = function(question, index, value){


    return (question.diff[index] === value)

}


if (!$rootScope.Assurances)
{
  //$location.path('/etape1');

  $rootScope.Assurances = [
    {"contract" : "-", "name" : "Caisse Epargne", "amiable" : 150 , "judiciaire" : 150,     "franchise" : 0,           "points"  : 0, "price" : 6.73}, // 0
    {"contract" : "-","name" : "Axa", "amiable" : 0                   ,  "judiciaire" : 450,   "franchise" : 0,   "points"  : 0, "price" : 6.25}, // 1
    {"contract" : "Vie Quotidienne","name" : "Allianz",  "amiable" : 100   , "judiciaire" : 400,  "franchise" : 0, "points"  : 0, "price" : 6.10}, // 2
    {"contract" : "Vie Quotidienne plus","name" : "Allianz", "amiable" : 100  , "judiciaire" : 400, "franchise" : 0, "points"  : 0, "price" : 0}, // 3
    {"contract" : "-","name" : "Pacifica",   "amiable" : 150     , "judiciaire" : 150,        "franchise" : 0,       "points"  : 0, "price" : 6}, // 4
    {"contract" : "Formule Essentielle","name" : "GMF",   "amiable" : 150  , "judiciaire" : 150,  "franchise" : 0, "points"  : 0, "price" : 6.42}, // 5
    {"contract" : "Formule Intégrales","name" : "GMF",  "amiable" : 150   , "judiciaire" : 150,  "franchise" : 0,  "points"  : 0, "price" : 0}, // 6
    {"contract" : "Vie Privée","name" : "Swiss Life",  "amiable" : 150   , "judiciaire" : 200,  "franchise" : 0,   "points"  : 0, "price" : 7.66}, // 7
    {"contract" : "Patrimoine","name" : "Swiss Life",  "amiable" : 150  , "judiciaire" : 200,   "franchise" : 0,   "points"  : 0, "price" : 15.33}, // 8
  ]
  $rootScope.maxPrice = 1000;
  $rootScope.checked = []
}

console.log($rootScope.checked);

$scope.maxPrice = function (item)
{
  return (item.price < $rootScope.maxPrice)
}

$rootScope.Assurances = $filter('orderBy')($rootScope.Assurances, 'points', 'reverse');


if ($rootScope.checked.indexOf(1.5) !== -1)
  $rootScope.Assurances[1].price = 11;

if ($rootScope.checked.indexOf(1.6) !== -1 || $rootScope.checked.indexOf(1.9) !== -1 || $rootScope.checked.indexOf(1.10) !== -1)
    $rootScope.Assurances[1].price = 13.75;

if ($rootScope.checked.indexOf(1.8) !== -1)
    $rootScope.Assurances[1].price = 21.25;


if (($rootScope.checked.indexOf(1.5) !== -1 && $rootScope.checked.indexOf(1.6) !== -1 ) || ($rootScope.checked.indexOf(1.10) !== -1) || ($rootScope.checked.indexOf(1.10) !== -1 && $rootScope.checked.indexOf(1.8) !== -1 ))
$rootScope.Assurances[1].price = 33.5;

$scope.res1 = $rootScope.Assurances[0];
$scope.res2 = $rootScope.Assurances[1];
$scope.res3 = $rootScope.Assurances[2];




}]);
