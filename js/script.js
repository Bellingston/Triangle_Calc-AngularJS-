angular.module('appCalc', [])
.controller('calcCtrl', function($scope) {
    
    $scope.res1 = function(){
        let a = $scope.katet;
        let c = $scope.gipotenusa;
        if (isNaN(a) || isNaN(c)) {
            return("Введите числа!");
        }
    
        else if (c == 0 || a == 0) {
            return("Вводимые значения не могут быть нулевыми!");
        }
    
        else if (c < 0 || a < 0) {
            return("Вводимые значения не могут быть отрицательными!");
        }
    
        else if (c <= a ) {
            return("Катет не может быть больше или равен гипотенузе!");
        }
    
        else {
            return($scope.result1 = Math.sqrt((Math.pow(c, 2)) - (Math.pow(a, 2)), 2));
        }
    }
    $scope.res2 = function(){
        let a = $scope.katet;
        let c = $scope.gipotenusa;
        if (isNaN(a) || isNaN(c)) {
            return("Введите числа!");
        }
    
        else if (c == 0 || a == 0) {
            return("Вводимые значения не могут быть нулевыми!");
        }
    
        else if (c < 0 || a < 0) {
            return("Вводимые значения не могут быть отрицательными!");
        }
    
        else if (c <= a ) {
            return("Катет не может быть больше или равен гипотенузе!");
        }
    
        else {
            b = (Math.sqrt((Math.pow(c, 2)) - (Math.pow(a, 2)), 2));
            return ($scope.result2 = (b + a - c) / 2);
        }
    }
})
