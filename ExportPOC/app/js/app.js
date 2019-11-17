'use strict';

// var eventsApp = angular.module('eventsApp', ['ngSanitize','ngResource','ngCookies']);
var eventsApp = angular.module('exportApp', [])
    .config(function($locationProvider){
  
            
            $locationProvider.html5Mode(true);
    });

