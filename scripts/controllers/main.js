'use strict';

angular.module('instasearcherApp')
  .controller('MainCtrl', function ($scope, $http) {

    $scope.searchSubmit = function(keyword) {
      
      $scope.keyword = keyword;

      var endpoint = "https://api.instagram.com/v1/tags/"+keyword+"/media/recent";
      var request = {
      	callback: 'JSON_CALLBACK',
      	client_id: '01255dd21bfe4e4cabdf5660f74a7a7d'
      };

      $http({
        method: 'JSONP',
        url: endpoint,
        params: request
      }).
      success(function(data) {
        $scope.results = data.data;
      }).
      error(function() {
        alert('error');
      });
    };

  });
