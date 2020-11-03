//if / else statements
console.log('// if/else logic START FROM HERE');

var firstName = 'john';
var civilStatus = 'single';

if(civilStatus === 'married'){//there are 3 equal sign to test the result (===)
    console.log(firstName + 'is married');
}
else{
    console.log(firstName + ' will hopefully marry soon.');
}

//when the variable is boolean then no need to write value
var isMarried = true;

if(isMarried){
    console.log(firstName + ' is married');
}
else{
    console.log(firstName + ' will hopefully marry soon.');
}

console.log('//Boolean logic START FROM HERE');
//Boolean logic

var secondName ='john';
var boyos = 16;

if(boyos < 13){
    console.log(secondName + ' is a boy ')
}
else if(boyos >= 13 && boyos < 20){
    console.log(secondName + ' is a teenager ')
}
else{
    console.log(secondName + ' is a man ')
}


// the ternary operator and switch statements

console.log('// the ternary operator and switch statements');
var age =90;


age >= 18/*that part is condition*/ ? console.log(firstName +  '  drinks beer')/*that part is for if statement*/ : console.log(firstName +  '  drinks juice ');/*that part is for else statement*/

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);


//  switch statements
console.log('//  switch statements');

var chores = 'driver';

switch(chores/*what we want to test*/){
    case "driver":
    case "instructor"://two case work as or operator as like in the if condition
        console.log(firstName + '  driver his chores')
        break;
    case "teacher":
        console.log(firstName + '  teacher his chores !!');
        break;
    case "designer":
        console.log(firstName + '  designer his chores');
        break;

    default://work as else ..if nothing happen then this happen
        console.log(firstName + '  nothing his chores');
}


//switch true or false
age = 15;
switch (true) {
    case age<13:
        console.log(firstName +age +  '  driver his chores')
        break;
    case age<18 && age >13:
        console.log(firstName +age +  '  teacher his chores !!');
        break;
    case age<2 && age>55:
        console.log(firstName +age +  '  designer his chores');
        break;

    default://work as else ..if nothing happen then this happen
        console.log(firstName + age + '  nothing his chores');
}
