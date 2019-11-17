/// <reference path="../angular.js"/>
angular.module("sportsStore")
.constant("dataUrl","https://localhost:44323/api/products")
.constant("orderUrl","https://localhost:44323/api/orders")
.controller("sportsStoreCtrl",function($scope,$http,$location,dataUrl,orderUrl,cart){

    $scope.data={};

    var successCallback=function(response){
        $scope.data.products=response.data;
    };

    var errorCallBack=function(response){
        $scope.data.error=response;
    };     

    $http.get(dataUrl).then(successCallback,errorCallBack);

    var orderCompleted=function(response){
        $scope.data.orderId=response.data.id;
        cart.getProducts().length=0;
        $location.path("/complete");
    }

    var orderError = function(response){
        $scope.data.orderError=response;
        $location.path("/complete");
    }

    $scope.sendOrder = function(shippingDetails){
        var order =angular.copy(shippingDetails);
        order.products=cart.getProducts();

        $http.post(orderUrl,order).then(orderCompleted,orderError);
    }
});