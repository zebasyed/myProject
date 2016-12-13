var navigation = angular.module('navigation',['ngRoute']);

navigation.config(function($routeProvider){
    
console.log('reached navigation');
  
     $routeProvider
        
        .when ('/rt-home',{
            templateUrl: '/rt-home',
            controller: 'homeCtrl'
            })
        .when ('/rt-contact',{
            templateUrl: '/rt-contact',
            controller: 'contactCtrl'
            });
    });

navigation.controller('homeCtrl',function($scope,$http){
           
});

navigation.controller('contactCtrl',function($scope,$http){
           
});