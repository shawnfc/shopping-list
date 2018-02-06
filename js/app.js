var app = angular.module('myApp', [])
    .controller('myCtrl', function ($scope) {
        $scope.products = [
            'item1',
            'item2',
            'item3'
        ];
        $scope.addItem = function(){
                $scope.products.push($scope.addMe);
                $scope.addMe = '';
        }
    });