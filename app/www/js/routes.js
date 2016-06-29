angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  .state('acessar', {
    url: '/acessar',
    templateUrl: 'templates/acessar.html',
    controller: 'acessarCtrl'
  })

  .state('menu', {
    url: '/app',
    templateUrl: 'templates/menu.html',
    //controller: 'appCtrl',
    abstract:true
  })
  
  .state('menu.alunos', {
    url: '/alunos',
    views: {
      'side-menu21': {
        templateUrl: 'templates/alunos.html',
        controller: 'alunosCtrl'
      }
    }
  })

  .state('menu.inicial', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pGinaInicial.html',
        controller: 'inicioCtrl'
      }
    }
  })

  .state('menu.professores', {
    url: '/professores',
    views: {
      'side-menu21': {
        templateUrl: 'templates/professores.html',
        controller: 'professoresCtrl'
      }
    }
  })

  .state('menu.cursos', {
    url: '/cursos',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cursos.html',
        controller: 'cursosCtrl',
        params: {
            periodo: null
        }
      }
    }
  })

  .state('menu.disciplinas', {
    url: '/disciplinas',
    views: {
      'side-menu21': {
        templateUrl: 'templates/disciplinas.html',
        controller: 'disciplinasCtrl',
        params: {
            professor: null
        }
      }
    }
  })
  
  .state('menu.horarios', {
    url: '/horarios',
    views: {
      'side-menu21': {
        templateUrl: 'templates/disciplinas.html',
        controller: 'horariosCtrl',
        params: {
            disciplinas: null
        }
      }
    }
  })


$urlRouterProvider.otherwise('/acessar')

  

});