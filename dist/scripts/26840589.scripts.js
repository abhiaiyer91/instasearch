"use strict";angular.module("instasearcherApp",["ngRoute","ngAnimate"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("instasearcherApp").directive("hide",["$timeout",function(a){return{link:function(b,c){a(function(){c.hide()},5e3)}}}]).controller("MainCtrl",["$scope","$http","$timeout",function(a,b){a.searchSubmit=function(c){a.keyword=c;var d="https://api.instagram.com/v1/tags/"+c+"/media/recent",e={callback:"JSON_CALLBACK",client_id:"01255dd21bfe4e4cabdf5660f74a7a7d"};b({method:"JSONP",url:d,params:e}).success(function(b){a.results=b.data,a.search=c,a.keyword="",a.responder=!0,a.counts=b.data.length}).error(function(){alert("error")})}}]);