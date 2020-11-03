/*
* basic operators
* */
var year = 2020;
var yearJohn =year -36;
var yearMark = year -33;

//Math operators
console.log(yearMark);

console.log(yearMark + 2 + '  total');
console.log(yearMark * 2 );
console.log(yearMark / 2);
console.log(yearMark % 2);

//logical operator

var johnOlder =yearMark > yearJohn;
console.log(johnOlder);

//type of operator
console.log(typeof johnOlder);
console.log(typeof yearJohn);
console.log(typeof 'Mark is older than john');

var x;
console.log(typeof x);

/*
NEW SECTION
operator precedence
 */

var now = 2018;
var yearSakib =2035;
var fullAge =18;
//there is a hierarchy of working of operators the link is https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
//multiple operators
var isFullAge =now - yearSakib >= fullAge;
console.log(isFullAge);

var ageSakib = now - yearSakib;
var ageMark =35;
console.log((ageMark+ageSakib)/2);

// Multiple assignments

var x ,y,z ;
z=10;
x = y =(31-4) * 5 / .25;//ASSOCIATIVITY  is pretty much important ...how the workflow happens
console.log(x ,y); //two result at a same time

//more operators

x += 2 // x = x+2
y *= 10 // y =y*10
z++;// z = z+1;
console.log(x,y,z);

//truthy values
console.log('/// equality operator');

var height = 23;

if(height == '23'){//here double equal convert the type according to the left side and check it
    console.log('the == operator does type coercion!');
}
if(height === '23'){
    console.log('the === operator does not type  coercion! ...it has to be same type' );
}
else{console.log('flase');}