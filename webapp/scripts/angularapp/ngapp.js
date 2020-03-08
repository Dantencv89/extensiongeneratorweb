
define(['angular','ngRoute','router','dbctrl'], function(angular,ngRoute,router,dbctrl){
  
  return angular
            .module('QlikExtGen', ['ngRoute'])
            .config(router)
            .controller('dbctrl',dbctrl)


})
