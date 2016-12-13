var app = angular.module('resisterModule',[]);
app.controller('registerValidate',function($scope,$http){
        $scope.submitSignup = function(){
            $scope.submitted = true;
            $http.post("/signup.submitSignup").then(function onSuccess(res){
                console.log(res);
            })
        }
    })