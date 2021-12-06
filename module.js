"use strict";
exports.__esModule = true;
exports.kenya = exports.greetings = void 0;
// modules are used to organise codes
// modules must be exported  to be used outside this file
function greetings() {
    console.log("How are you?");
} // end
exports.greetings = greetings;
var kenya;
(function (kenya) {
    function holiday() {
        console.log('Happy Holidays');
    }
    kenya.holiday = holiday;
})(kenya = exports.kenya || (exports.kenya = {})); // end namespace
