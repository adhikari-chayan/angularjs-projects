'use strict'

describe("EventListController",function(){
    var $controllerConstructor;
    var scope;
    var mockeEventData;

    beforeEach(module("eventsApp"));   
    beforeEach(
        inject(function($controller,$rootScope){
            $controllerConstructor=$controller;
            scope=$rootScope.$new();
            mockeEventData=sinon.stub({getAllEvents:function() {}});
        })
    );

    it("should set the scope events to the result of eventData.getAllEvents",function(){

        var mockEvents={};
        mockeEventData.getAllEvents.returns(mockEvents);
        $controllerConstructor("EventListController",{'$scope':scope, eventData:mockeEventData})
        
        expect(scope.events).toBe(mockEvents);
    })
});