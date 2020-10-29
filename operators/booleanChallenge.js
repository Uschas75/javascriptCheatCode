var markMass = 200;
var markHeight =5.10;

var johnMass = 250;
var johnHeight =6.10;

var markBMI , johnBMI;

markBMI = markMass/markHeight^2;
johnBMI =johnMass/ johnHeight^2;

var markBMIhigher = markBMI > johnBMI;
console.log("Is mark BMI is higher than john's ?" + '   ' +  markBMIhigher);
alert("Is mark BMI is higher than john's ?" + '   ' +  markBMIhigher);
