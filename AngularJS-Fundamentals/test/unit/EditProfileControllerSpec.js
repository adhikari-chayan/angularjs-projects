'use strict'

describe("EditProfileController",function(){
    var $controllerConstructor;
    var scope;
    var mockeGravatarUrlBuilder;

    beforeEach(module("eventsApp"));   
    beforeEach(
        inject(function($controller,$rootScope){
            $controllerConstructor=$controller;
            scope=$rootScope.$new();
            mockeGravatarUrlBuilder=sinon.stub({buildGravatarUrl:function() {}});
        })
    );

    it("should build the gravatar with the given email",function(){

      $controllerConstructor("EditProfileController",{'$scope':scope, gravatarUrlBuilder:mockeGravatarUrlBuilder})
      
      var email="test@test.com";
      scope.getGravatarUrl(email);

      expect(mockeGravatarUrlBuilder.buildGravatarUrl.calledWith(email)).toBeTruthy();
    })
});