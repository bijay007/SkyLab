angular.module('TasksApp', ['ngRoute','angularMoment'])
  .config( function( $routeProvider ) {

    $routeProvider
      .when('/tasks/todo', {
          templateUrl: '/partials/tasks.html',
          controller: 'TodoTasksCtrl'
      })
      .when('/tasks/done', {
          templateUrl: '/partials/done.html',
          controller: 'DoneTasksCtrl'
      })
      .otherwise('/tasks/todo')

  })
  .controller('TasksCtrl', function($scope, DataFactory) {

    function getTasks() {
      DataFactory.getTasks()
        .then( tasks => $scope.tasks = tasks )
    }

    $scope.$on('tasksChange', getTasks)

    $scope.removeTask = function(e, id) {
      e.preventDefault()
      DataFactory.removeTask(id)
    }

    getTasks()

  })
  .controller('TodoTasksCtrl', function($scope, DataFactory) {

    $scope.section = 'todo'

    $scope.addTask = function(e) {
      e.preventDefault()
      const title = $scope.title
      $scope.title = ''
      DataFactory.addTask(title)
    }

    $scope.markAsDone = function(e, task) {
      e.preventDefault()
      DataFactory.markAsDone(task)
    }

  })
  .controller('HeaderCtrl', function($scope, $location) {

     $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

  })
  .controller('DoneTasksCtrl', function($scope, DataFactory) {

    $scope.section = 'done'

  })
  .factory('DataFactory', function($http, $q, $rootScope) {

    function notifyChanges() {
      $rootScope.$broadcast('tasksChange');
    }

    function getTasks() {
      return $http.get('/api/Todos')
                .then( ({ data }) => data )
    }

    function addTask( title ) {
      return $http.post('/api/Todos', { title } )
                .then( notifyChanges )
    }

    function removeTask( id ) {
      return $http.delete(`/api/Todos/${id}`)
                .then( notifyChanges )
    }

    function markAsDone({ id, title, createdAt }) {
      return $http.put(`/api/Todos/${id}`, { id, title, done:true, createdAt })
                .then( notifyChanges )
    }

    return { getTasks, addTask, removeTask, markAsDone }

  })