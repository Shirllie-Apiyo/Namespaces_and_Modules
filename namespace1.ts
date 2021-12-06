var modcom;
(function (modcom) {
    var BMI = /** @class */ (function () {
        function BMI(weight, height) {
            this.weight = weight;
            this.height = height;
        }
        BMI.prototype.calculate = function () {
            var answer = this.weight / (this.height * this.height);
            console.log("BMI is " + answer);
        };
        return BMI;
    }());
    modcom.BMI = BMI;
    var SI = /** @class */ (function () {
        function SI() {
        }
        SI.prototype.calculate = function (p, r, t) {
            var answer = p * r * t / 100;
            console.log("SI is " + answer);
        };
        return SI;
    }()); // end SI
    modcom.SI = SI;
    var westlands;
    (function (westlands) {
        function example() {
            console.log("This is testing");
        }
        westlands.example = example;
    })(westlands = modcom.westlands || (modcom.westlands = {})); // end
})(modcom || (modcom = {})); // end namespace
var bmi = new modcom.BMI(6.7, 9.2);
bmi.calculate();
// call for SI
var si = new modcom.SI();
si.calculate(50000, 1.5, 24);
// access
modcom.westlands.example();
