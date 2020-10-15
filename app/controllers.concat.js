angular.module('app').controller('q1Controller', ['$scope', '$rootScope','$http', function($scope, $rootScope, $http){


    $rootScope.checked = []; // Contient toutes les reponses cochées ex :  [1.1, 1.2, 1.5]

    $rootScope.nbCheck = 0;  // Nombre de réponses cochées pour la question acutelle

    $http.get('assets/config.json').then(function(response) {
        // Récuperation des valeurs de conf ( assets/config.json )
        $rootScope.conf = response.data;
    });

    $http.get('assets/assurances.json').then(function(response) {
        // Récuperation des valeurs des assurances ( assets/assurances.json )
        $rootScope.Assurances = response.data;
    });

    $http.get('assets/question1.json').then(function(response) {
        // Récuperation des questions  ( assets/question1.json )
        $rootScope.question = response.data;
    });

$rootScope.checkChanged = function(response, item){



    if(item)
    {
        // on verifie que la question n'est pas dans le tableau $rootScope.checked
        if ($rootScope.checked.indexOf(response.id) == -1)
        {
            // on l'ajoute au tableau
            $rootScope.checked.push(response.id);
        }

        for (i = 0; i < response.diff.length; i++) {
            // on ajoute les points de la question à l'assurance
            $scope.Assurances[i].points += response.diff[i];
        }

        for (j = 0; j < response.correctifs.length; j++) {
            // on applique les differentiels
            for (idx = 0; idx < response.correctifs[j].length; idx++)
                $scope.Assurances[idx].points += response.correctifs[j][idx];
        }
        $rootScope.nbCheck++;
    }
    else {
        var i = 0;

        var index = $rootScope.checked.indexOf(response.id);
        $rootScope.checked.splice(index, 1);

        while (i < response.diff.length) {
            $scope.Assurances[i].points -= response.diff[i];
            i++;
        }

        for (j = 0; j < response.correctifs.length; j++) {
            for (idx = 0; idx < response.correctifs[j].length; idx++)
                $scope.Assurances[idx].points -= response.correctifs[j][idx];
        }
        $rootScope.nbCheck--;
    }
}

}]);

angular.module('app').controller('q2Controller', ['$scope', '$rootScope', '$location', '$http',  function($scope, $rootScope, $location, $http) {

    $rootScope.nbCheck = 0;

    $http.get('assets/config.json').then(function(response) {
        $rootScope.conf = response.data;
    });

    if (!$rootScope.Assurances) {
        $location.path('/etape1');
    }

    $http.get('assets/question2.json').then(function(response) {
        $scope.question = response.data;
    });

}]);

angular.module('app').controller('q3Controller', ['$scope', '$rootScope', '$location', function($scope, $rootScope){

    $rootScope.maxPrice = 1000;

    console.log($rootScope);
    if (!$rootScope.Assurances) {
        $location.path('/etape1');
    }

    $scope.ApplyPrice = function(max) {
     $rootScope.maxPrice = max;
        console.log('max : ' + max);
    }

}]);

angular.module('app').controller('resultController', ['$scope', '$rootScope', '$location', '$filter', '$http',  function($scope, $rootScope, $location, $filter, $http){

    $scope.ready = false;
    console.log($rootScope);

    if (!$rootScope.Assurances) {
        $location.path('/etape1');
    }

    $scope.isChecked = function (id) {
        if ($rootScope.checked.indexOf(id.id) > -1){
            return true;
        }
    };


    $scope.sortByPrice = function(array, max){

        var rtn = [];

        array.forEach(function(item){

            console.log(item.price + ' ' +  max)

            if (item.price < max){
                rtn.push(item);
            }
        });
        return (rtn);
    };

    $scope.optionIsValid = function(question, index, value){
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
    $rootScope.AssurancesSorted = $scope.sortByPrice($rootScope.AssurancesSorted, $rootScope.maxPrice);

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
