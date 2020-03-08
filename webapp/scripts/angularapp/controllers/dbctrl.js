
define([], function(){
    return function dbctrlController($scope,$http) {
        $scope.extension={
            dimensions:{
                min:1,
                max:1
            },
            measures:{
                min:1,
                max:1
            }
        }


        $scope.callPostMethod=function(){
            console.log('firing post method post 3...')
            $http({
                    "method":"POST",
                    "url": "http://localhost:3000/post",
                    "data":$scope.extension,
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
  