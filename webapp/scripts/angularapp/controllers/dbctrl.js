
define([], function(){
    return function dbctrlController($scope,$http) {
        $scope.firstName= "John";
        $scope.lastName= "Doe";


        $scope.callPostMethod=function(){
            console.log('firing post method post 3...')
            $http({
                    "method":"POST",
                    "url": "http://localhost:3000/post",
                    "data":{data: "hola mundo Selena"},
                    "Content-Type": "application/json"
                })
                .then((success)=>{
                    console.log(success)
                })
                .catch((err)=>{
                    console.log(err)
                })
        }
    };
  })
  