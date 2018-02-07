var app = angular.module('myShoppingList', [])

    .controller('myCtrl', function ($scope) {
        $scope.products = [];

        // Add an item
        $scope.addItem = function () {
            // Error text
            $scope.errorText = "";

            if (!$scope.addMe) {
                return
            }

            if ($scope.products.indexOf($scope.addMe) == -1) {
                $scope.products.push($scope.addMe);
            } else {
                $scope.errorText = "The item is already in your list";
            }
        };

        // Remove an item
        $scope.removeItem = function (x) {
            $scope.errorText = '';
            $scope.products.splice(x, 1);
        }
    });