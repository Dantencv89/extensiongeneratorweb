define([],function(){
    function config($routeProvider,$locationProvider) {
        $locationProvider.hashPrefix('')
        $routeProvider
            .when('/home',{templateUrl: './templates/home.html' , controller: 'dbctrl'})
            .otherwise({redirectTo: '/home'});
    }
    
    config.$inject=['$routeProvider','$locationProvider'];
      
    return config;

})