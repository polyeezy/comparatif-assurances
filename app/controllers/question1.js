angular.module('app').controller('q1Controller', [
	'$scope',
	'$rootScope',
	'$http',
	function ($scope, $rootScope, $http) {
		$rootScope.checked = []; // Contient toutes les reponses cochées ex :  [1.1, 1.2, 1.5]

		$rootScope.nbCheck = 0; // Nombre de réponses cochées pour la question acutelle

		$http.get('assets/config.json').then(function (response) {
			// Récuperation des valeurs de conf ( assets/config.json )
			$rootScope.conf = response.data;
		});

		$http.get('assets/assurances.json').then(function (response) {
			// Récuperation des valeurs des assurances ( assets/assurances.json )
			$rootScope.Assurances = response.data;
		});

		$http.get('assets/question1.json').then(function (response) {
			// Récuperation des questions  ( assets/question1.json )
			$rootScope.question = response.data;
		});

		$rootScope.checkChanged = function (response, item) {
			if (item) {
				// on verifie que la question n'est pas dans le tableau $rootScope.checked
				if ($rootScope.checked.indexOf(response.id) == -1) {
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
						$scope.Assurances[idx].points +=
							response.correctifs[j][idx];
				}
				$rootScope.nbCheck++;
			} else {
				var i = 0;

				var index = $rootScope.checked.indexOf(response.id);
				$rootScope.checked.splice(index, 1);

				while (i < response.diff.length) {
					$scope.Assurances[i].points -= response.diff[i];
					i++;
				}

				for (j = 0; j < response.correctifs.length; j++) {
					for (idx = 0; idx < response.correctifs[j].length; idx++)
						$scope.Assurances[idx].points -=
							response.correctifs[j][idx];
				}
				$rootScope.nbCheck--;
			}
		};
	},
]);
