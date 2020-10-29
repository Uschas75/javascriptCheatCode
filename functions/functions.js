
/*
functions
 */
console.log(' ///  functions ' );

function calculateAge(birthyear) {
    return 2018 - birthyear;
}

console.log('age is ' + calculateAge(1998));

function yearsUntilRetirement(year , firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if(retirement > 0){
        console.log(firstName+ ' retires in ' + retirement + ' years.');
    }
    else{
        console.log(firstName+ ' is already retired.' );
    }
}

yearsUntilRetirement(1990 , 'john');
yearsUntilRetirement(1983 , 'beneke');
yearsUntilRetirement(1965 , 'mike');
yearsUntilRetirement(1999 , 'walt');


/*
Functions Satements and Expressions
 */

console.log(' ///  Functions Satements and Expressions');


//Function expression
//difference whatDoYouDo(job , firstName){}

var whatDoYouDo = function (job ,firstName) {

    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';//return also work as break;
        case 'driver':
            return firstName + ' drives a cab';
        case 'designer':
            return firstName + ' beautiful websites';
        default:
            return firstName + ' something else.'
    }
}

console.log(whatDoYouDo('teacher' , 'john'));
console.log(whatDoYouDo('drive' , 'Mike'));
console.log(whatDoYouDo('designer' , 'Sakib'));
console.log(whatDoYouDo('master' , 'walt'));