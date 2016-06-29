angular.module('app.controllers', [])
  
.controller('acessarCtrl', function($scope) {

})
   
.controller('alunosCtrl', function($scope, $http, $location, $ionicLoading) {
    $ionicLoading.show({
        template:'<i class="ion-loading-c" style="background-color:#F0F;"></i>' + 'Carregando...'
    });
    $http.get('https://learning-ionic-developerhbr.c9users.io/projAgenda/api/periodos')
        .success(function(response) {
		    $scope.lista = response.periodos;
		    $ionicLoading.hide();   
		})
		.error(function(data, status, headers, config) {
	    	console.info('Error ao carregar periodo')
		});
	$scope.exibir = function(period){
	    $location.path('app/cursos').search({periodo: period});
	    //$state.go('cursos', {periodo: periodo})
	}
})
   
.controller('inicioCtrl', function($scope) {

})
      
.controller('professoresCtrl', function($scope, $ionicLoading, $http, $location) {
    $ionicLoading.show({
        template:'<i class="ion-loading-c" style="background-color:#F0F;"></i>' + 'Carregando...'
    });
    $http.get('https://learning-ionic-developerhbr.c9users.io/projAgenda/api/professores')
        .success(function(response) {
		    $scope.lista = response.professores;
		    $ionicLoading.hide();   
		})
		.error(function(data, status, headers, config) {
	    	console.info('Error ao carregar periodo')
		});
	$scope.exibir = function(prof){
	    $location.path('app/disciplinas').search({professor: prof});
	}
})
   
.controller('cursosCtrl', function($scope, $location, $http, $ionicLoading) {
    var data = $location.search();
    console.info(data.periodo);
    $ionicLoading.show({
        template:'<i class="ion-loading-c" style="background-color:#F0F;"></i>' + 'Carregando...'
    });
    $http.get('https://learning-ionic-developerhbr.c9users.io/projAgenda/api/cursos/'+data.periodo)
        .success(function(response) {
            $scope.exibe = true;
            if(response.cursos){
              $scope.lista = response;
            }
		    $ionicLoading.hide();   
		})
		.error(function(data, status, headers, config) {
            $scope.exibe = true;
	    	console.info('Error ao carregar periodo')
		});
})
   
.controller('disciplinasCtrl', function($scope) {

})

.controller('horariosCtrl', function($scope) {
    
})
   
