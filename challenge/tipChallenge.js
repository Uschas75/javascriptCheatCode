
var bill1 = 48;
var bill2 = 124;
var bill3 = 268;

function tipCalculator(bill) {
    if(bill < 50){
        return bill* .20;
    }
    else if(bill > 50 && bill <= 200){
        return bill* .15;
    }
    else{
        return bill* .10;
    }
}

var tips = [tipCalculator(bill1) , tipCalculator(bill2) , tipCalculator(bill3)];
var totalBills = [tipCalculator(bill1)+bill1 , tipCalculator(bill2)+bill2 , tipCalculator(bill3)+bill3];


console.log('All the three tip consecutively  ',tips);
console.log('All the three bills consecutively  ',totalBills);

