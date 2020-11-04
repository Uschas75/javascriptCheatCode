///passing functions as argument

console.log('// passing function as argument \n');

var years =[1990 , 1560 , 1890 ,1950];

function arrayCalc(arr, fn){
    var arrRes =[];
    for(var i = 0; i< arr.length ; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2016 - el;
}

function isFullAges(el){
    return el >= 18;
}

function maxHeartRate(el){
    if(el >= 18 && el <= 81) {
        return math.round(206.9 - (0.67 * el));
    }
    else {
        return  -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(years, isFullAges);
var rates = arrayCalc(years, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);


//returning function

console.log('//returning function \n');

function interviewQuestion(job){
    if(job === 'designer'){
        return function (name){
            console.log(name + ' do something please');
        }
    }
    else if(job === 'teacher'){
        return function (name){
            console.log(name + ' teach me');
        }
    }
    else {
        return function (name){
            console.log('hello ' + name + ' love yeah');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');

teacherQuestion('john');//teacherQuestion return the functions
interviewQuestion('designer')('todd');

//iife
console.log('\n ///life \n');

function game(){
    var score = Math.random() *10;
    console.log(score >= 5);
}
game();

(
    function (){
        var score = Math.random() *10;
        console.log(score >= 5);
    }
)();

(
    function (goodluck){
        var score = Math.random() *10;
        console.log(score >= 5);
    }
)(5);

//closure

console.log('\n closure \n');

function retirement(retirementAge){
    var a = ' years left until retirement.';
    return function(yearOfBirth){
        var age = 2016 -yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1990);

var retirementGermary = retirement(65);
var retirementIceland = retirement(67);

retirementGermary(1987);
retirementIceland(1967);
retirement(65)(1998);//for single line we can write in this way


//Bind call and apply

var john ={
    name: 'john',
    age: 26,
    job: 'teacher',
    presentation : function(style , timeOfDay){
        if(style === 'formal') {
            console.log('good' + timeOfDay + ', ladies and gentlemen! I\'m '+
            this.name + ', I\'m a ' +
            this.job + ' and i\'m ' +
            this.age + ' years old.');
        }

        else if(style === 'friendly'){
            console.log('hey! what\'s up? I\'m ' + this.name + ',I\'m a '
            + this.job +
            'and I\'m ' + this.age +
            'years old habe a nice ' + timeOfDay + ' . ');

        }
    }
}

john.presentation('formal' , 'morning');

var emily ={
    name: 'Emily',
    age: 35,
    job: 'designer'
};
john.presentation.call(emily , 'friendly' , 'afternoon');

// john.presentation.apply(emily, ['friendly' , 'afternoon']);
//this will not work cause the input field is not an array

var johnFriendly =
    john.presentation.bind(john , 'friendly');

johnFriendly('morning');//this is the second parameter
johnFriendly('night');