let app = angular.module("appCalc", []);
app.controller ('calcCtrl', function($scope){
$scope.findKatet = function findKatet() {
    let a = Number($scope.katet || 0);
    let c = Number($scope.gipotenusa || 0);
    if (isNaN(a) || isNaN(c)) {
        alert("Введите числа!");
    }

    else if (c == 0 || a == 0) {
        alert("Вводимые значения не могут быть нулевыми!");
    }

    else if (c < 0 || a < 0) {
        alert("Вводимые значения не могут быть отрицательными!");
    }

    else if (c <= a ) {
        alert("Катет не может быть больше или равен гипотенузе!");
    }

    else {$scope.result = Math.sqrt((Math.pow(c, 2)) - (Math.pow(a, 2)), 2);
    }
}

$scope.findRadius = function findRadius() {
    let a = Number($scope.katet || 0);
    let c = Number($scope.gipotenusa || 0);
    if (isNaN(a) || isNaN(c)) {
        alert("Введите числа");
    }

    else if (c == 0 || a == 0) {
        alert("Вводимые значения не могут быть нулевыми!");
    }

    else if (c < 0 || a < 0) {
        alert("Вводимые значения не могут быть отрицательными!");
    }

    else if (c <= a ) {
        alert("Катет не может быть больше или равен гипотенузе!");
    }

    else {b = (Math.sqrt((Math.pow(c, 2)) - (Math.pow(a, 2)), 2));
    $scope.result = (b + a - c) / 2;
    }
}
})