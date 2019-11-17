/// <reference path="../angular.js"/>

angular.module("sportsStoreAdmin")
.constant("authUrl","https://localhost:44323/api/users/login")
.constant("ordersUrl", "https://localhost:44323/api/orders")
.controller("authCtrl",function($scope,$http,$location,authUrl){

    $scope.user={};

    var authResponseCompleted=function(response){
        if(response.status=="200"){
            $location.path("/main");
        }else{
            $scope.authenticationError=response;
        }
        
    }

    var authResponseError = function(response){
        $scope.authenticationError=response;
    }

    $scope.authenticate=function(user){

        $http.post(authUrl,user).then(authResponseCompleted,authResponseError);
    }

})
.controller("mainCtrl",function($scope){

    $scope.screens=["Products","Orders"];
    $scope.current=$scope.screens[0];

    $scope.setScreen=function(index){
        $scope.current=$scope.screens[index];
    };

    $scope.getScreen = function () {
        return $scope.current == "Products"
            ? "/views/adminProducts.html" : "/views/adminOrders.html";
    };
})
.controller("ordersCtrl",function($scope,$http,ordersUrl){
    
    $scope.data={};
    
    var successCallback=function(response){
        $scope.data.orders=response.data;
    };

    var errorCallBack=function(response){
        $scope.data.error=response;
    };     

    $http.get(ordersUrl).then(successCallback,errorCallBack);


    $scope.selectedOrder;
 
    $scope.selectOrder = function(order) {
        $scope.selectedOrder = order;
    };
 
    $scope.calcTotal = function(order) {
        var total = 0;
        for (var i = 0; i < order.products.length; i++) {
            total +=
                order.products[i].count * order.products[i].price;
        }
        return total;
    }

});