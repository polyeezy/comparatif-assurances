
angular.module('app').filter('checked', function(id) {


    return $rootScope.checked.indexOf(id) >= 0;
});


angular.module('app').controller('resultController', ['$scope', '$rootScope', '$location', '$filter',  function($scope, $rootScope, $location, $filter){


    if (!$rootScope.Assurances)
    {
        $location.path('/etape1');

    }

    if (!$rootScope.Assurances) {


            $rootScope.maxPrice = 1000;
            $rootScope.checked = [];
        $rootScope.Assurances = [];

        $location.path('/etape1');
    }

$scope.limit = 5;
$scope.checked = 0;




$scope.isChecked = function (id)
{
    if ($rootScope.checked.indexOf(id.id) > -1)
    {
        return true;

    }
}

$scope.optionIsValid = function(question, index, value){
    return (question.diff[index] === value)
}

$scope.franchise = function(id){
    return $rootScope.Assurances[1].franchise;
}




$scope.maxPrice = function (item)
{
  return (item.price < $rootScope.maxPrice)
}



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

        console.log($rootScope.Assurances[3].price + ' ' + $rootScope.Assurances[3].name);

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
    };
    $scope.question2 = {
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
    };
}]);
