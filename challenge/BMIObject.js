
var mark = {
    firstName : 'mark',
    mass : 250,
    height : 6.10,
    BMIcalc : function () {
        this.BMI =  this.mass/this.height^2;
        return this.mass/this.height^2;
    }
}

var john = {
    firstName : 'john',
    mass : 280,
    height : 5.10,
    BMIcalc : function () {
        this.BMI =  this.mass/this.height^2;
        return this.mass/this.height^2;
    }
}


john.BMIcalc();
mark.BMIcalc();


var heighestBMI = john.BMI > mark.BMI  ? john.firstName + ' has height BMI ' +john.BMI :  mark.firstName + ' has height BMI ' +mark.BMI;

if(john.BMI > mark.BMI){
    console.log(john.firstName + ' has height BMI ' +john.BMI );
}
else if(john.BMI < mark.BMI){
   console.log(mark.firstName + ' has height BMI ' +mark.BMI);
}
else{
    console.log('nothing');
}

console.log(john);
console.log(mark);