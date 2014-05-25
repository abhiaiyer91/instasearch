'use strict';

angular.module('instasearcherApp')

	.directive('hide', function($timeout){
	  return {
	    link: function(scope, element, attrs) {
	      $timeout(function(){
	        element.hide();
	      }, 3000);
	    }
	  }
	})


  .controller('MainCtrl', function ($scope, $http, $timeout) {

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
        $scope.search = keyword;
        $scope.keyword = '';
        $scope.responder = true;
      	$scope.counts = data.data.length;
        $scope.failure = false;
      }).
      error(function() {
        $scope.failure = true;
      });



    };

  });
