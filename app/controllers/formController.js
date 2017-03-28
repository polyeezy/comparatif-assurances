angular.module('app').controller('formController', ['$scope', function($scope){

$scope.limit = 5;
$scope.checked = 0;


$scope.Assurances = [
  {"name" : "Caisse Epargne",                 "points"  : 0}, // 0
  {"name" : "Axa",                            "points"  : 0}, // 1
  {"name" : "Allianz Vie Quotidienne",        "points"  : 0}, // 2
  {"name" : "Allianz Vie Quotidienne plus",   "points"  : 0}, // 3
  {"name" : "Pacifica",                       "points"  : 0}, // 4
  {"name" : "GMF Formule Essentielle",        "points"  : 0}, // 5
  {"name" : "GMF Formule Intégrales",         "points"  : 0}, // 6
  {"name" : "Swiss Life Vie Privée",          "points"  : 0}, // 7
  {"name" : "Swiss Life Patrimoine",          "points"  : 0}, // 8
];

$scope.questions = [
  {
    "value"     : "Parmi ces situations, indiquez les 5 que vous souhaitez voir en priorité couvertes par votre assurance Protection juridique",
    "responses" : [
                    {'value'        : "Litige avec un professionnel suite à l'achat d'un bien",
                      'diff'        : [20, 20, 20, 20, 20, 20, 20, 20, 20],
                      'correctifs'  : [
                        [-1, 0, -1, -1, -1, -1, -1, 0, 0],
                        [-1, -3, -1, -1, -1, -1, -1, 1, 1],
                        [0, 0, 0, 0, 0, -2, -2, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, -7, 0]

                      ]
                    }, //1
                    { 'value' : "Litige de voisinage",
                      'diff' : [20, 20, 20, 20, 20, 20, 20, 0, 20],
                      'correctifs'  : [
                        [-1, 0, -1, -1, -1, -1, -1, 0, 0],
                        [-1, -3, -1, -1, -1, -1, -1, 0, -1],
                        [0, -3, 0, 0, 0, -2, -2, 0, 0],
                        [0, -3, 0, 0, 0, -2, -2, 0, 0]
                      ]
                    }, //2
                    {'value' : "Litige avec votre employeur",
                      'diff' : [20, 20, 20, 20, 20, 20, 20, 0, 20],
                      'correctifs'  : [
                        [-1, 0, -1, -1, -1, -1, -1, 0, 0],
                        [-1, -3, -1, -1, -1, -1, -1, -1, -1],
                        [0, -3, 0, 0, 0, -2, -2, 0, 0],
                        [-2, -1, -1, -1, -1, -1, -1, -1, -1],


                      ]
                    }, //3
                    {'value' : "Litige avec votre propriétaire",
                      'diff' : [20, 20, 20, 20, 20, 20, 20, 20, 20],
                      'correctifs'  : [
                        [-1, 0, -1, -1, -1, -1, -1, 0, 0],
                        [-1, -3, -1, -1, -1, -1, -1, -1, -1],
                        [0, 0, 0, 0, 0, -2, -2, 0, 0],
                        [0, -2, 0, 0, 0, 0, 0, 0, 0]

                      ]}, //4

                    {'value' : "Litige avec votre locataire",
                      'diff' : [0, 20, 20, 20, 0, 20, 20, 0, 20],
                      'correctifs'  : [
                        [0, 0, -3, -3, 0, -1, -1, 0, 0],
                        [0, -3, -3, -3, 0, -1, -1, 0, -1],
                        [0, 0, 0, 0, 0, -2, -2, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0]
                      ]
                    }, //5
                    {'value' : "Ltige avec un héritier dans le cadre de la succession d'un proche",
                      'diff' : [20, 20, 0, 20, 20, 20, 20, 0, 20],
                      'correctifs'  : [
                        [-1, 0, 0, -1, -1, -1, -1, 0, 0],
                        [-1, -3, -1, -1, -1, -1, -1, 1, -1],
                        [0, 0, 0, 0, 0, -2, -2, 0, -5],
                        [0, 0, 0, 0, -1, 0, 0, 0, -1]


                      ]}, //6

                    {'value' : "Litige avec un professionnel de la santé (médecin, dentiste, chirurgien) suite à une intervention médicale",
                      'diff' : [20, 20, 20, 20, 20, 20, 20, 20, 20],
                      'correctifs'  : [
                        [-1, 0, -1, -1, -1, -1, -1, 0, 0],
                        [-1, -3, -1, -1, -1, -1, -1, -1, -1],
                        [0, 0, 0, 0, 0, -2, -2, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0]
                      ]}, //7

                    {'value' : "Litige avec votre constructeur ",
                      'diff' : [0, 20, 20, 20, 0, 0, 20, 20, 20],
                      'correctifs'  : [
                        [0, 0, -1, -1, 0, 0, -1, 0, 0],
                        [0, -3, -1, -1, 0, 0, -1, -1, -1],
                        [0, 0, -5, -5, 0, 0, -4, -5, -5],
                        [0, -2, -4, -4, 0, 0, -4, 0, 0]
                      ]}, //8
                    {'value' : "Divorce, rupture de PACS ou d'union libre ",
                      'diff' : [0, 20, 0, 20, 0, 0, 20, 0, 0],
                      'correctifs'  : [
                        [0, 0, 0, -1, 0, 0, -1, 0, 0],
                        [0, -3, 0, -1, 0, 0, -1, 0, 0],
                        [0, -3, 0, -5, 0, 0, -4, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0]


                      ]}, //9
                    {'value' : "Action en paiement d'une pension alimentaire ",
                      'diff' : [0, 20, 0, 20, 0, 0, 20, 0, 0],
                      'correctifs'  : [
                        [0, 0, 0, -1, 0, 0, -1, 0, 0],
                        [0, -3, 0, -1, 0, 0, -1, 0, 0],
                        [0, -3, 0, -5, 0, 0, -4, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0]



                      ]}, //10

                    {'value' : "Litige avec votre assistante maternelle ou votre employé(e) de maison",
                      'diff' : [20, 20, 20, 20, 20, 20, 20, 20, 20],
                      'correctifs'  : [
                        [-1, 0, -1, -1, -1, -1, -1, 0, 0],
                        [-1, -3, -1, -1, -1, -1, -1, -1, -1],
                        [0, 0, 0, 0, 0, -2, -2, 0, 0],
                        [-3, -2, -4, -4, -2, 0, 0, 0, 0]



                      ]}, //11
                    {'value' : "Litige avec le fisc (redressement fiscal)",
                      'diff' : [20, 20, 20, 20, 20, 20, 20, 0, 20],
                      'correctifs'  : [
                        [-1, 0, -1, -1, -1, -1, -1, 0, 0],
                        [-1, -3, -1, -1, -1, -1, -1, 0, -1],
                        [0, -3, 0, 0, 0, -2, -2, 0, 0],
                        [-3, -2, -4, -4, -2, 0, 0, 0, 0]



                      ]}, //12
                    {'value' : "Contestation d'une infraction au code de la route ",
                      'diff' : [0, 0, 0, 20, 0, 0, 0, 0, 0],
                      'correctifs'  : [
                        [0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0]


                      ]}, //13
                    {'value' : "Litige en votre qualité de caution",
                      'diff' : [20, 20, 0, 20, 0, 0, 20, 0, 0],
                      'correctifs'  : [
                        [-1, 0, 0, -1, 0, 0, -1, 0, 0],
                        [-1, -3, 0, -1, 0, 0, -1, 0, 0],
                        [0, 0, 0, 0, 0, 0, -2, 0, 0],
                        [-3, -3, 0, 0, 0, 0, -4, 0, 0]

                      ]}, //14
                  ]
                }
];


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
