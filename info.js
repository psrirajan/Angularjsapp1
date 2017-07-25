
angular.module('myApp', []).controller('MyCtrl', function($scope) {

 
    $scope.getContent = function(obj){
        return obj.value + " " + obj.text
    }
    $scope.opts = [
        {value: 111, text: '<b>1st</b>' },
        {value: 222, text: '<i>2nd</i>' }
    ];
}
 