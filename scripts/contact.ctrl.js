(function () {
  "use strict";

  angular
    .module("contactApp")
      .controller("contactCtrl", function($scope, $http) {
        $http.get('data/data.json').then(function(response) {
          $scope.persons = response.data;
        })
        $scope.postForm = function(person) {
          if (person) {
            $scope.persons.push(person);
          }
        }
        $scope.editPost = function(person) {
          $scope.editing = true;
          $scope.person = person;
        }
        $scope.deletePost = function(person) {
          var index = $scope.persons.indexOf(person);
          $scope.persons.splice(index);
        }
      })
})();
