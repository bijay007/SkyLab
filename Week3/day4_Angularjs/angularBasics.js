=> ng-module(angular.module) is an object that contains property-value & methods that updates automatically on {{view}}

=> angular object has methods. one of them is module. we can use methods like ng-controller,ng-app,ng-factory etc inside it
	eg. angular.module('myApp', function(){.container(){}}); etc

=> we have to, in app.js say that mainapp has dependency on controllers ie. dependency injection [mycontroller]

=> we initialize where controller logic work by putting ng-something in html

=> $scope is object where we can add properties...these will be dynamically added in HTML via {{}} (scope binds controller with view)

=> ng-directives are used in HTML that depend on same module.directive somehwhere in javascript where it grabs data from

=> with ng-model you define variables in HTML that lies within the scope of the controller in js

