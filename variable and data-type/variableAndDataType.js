console.log('hello World!!!');//for printing something

var firstName = 'john';//variable name 'firstName' and variable value 'john'

console.log(firstName);

var lastName ='Smith';//string data type
var age =28;//Number data type

var fullAge = true;// Boolean data type

console.log(fullAge);

var job;//value with undefined in a
console.log(job);

job = 'Teacher';
console.log(job);//same variable but when we put its value ..it assign its value;

//single line comment
/*
* double line comment
* */
var _3years = 3;

/*
variable mutation  and type coercion
 */

console.log('variable mutation  and type coercion');

var secondName = 'john';
var boyosh =28;

console.log(secondName+ ' ' + boyosh);//adding string and converting number into string

//multi-variable declared at the same time

var appoinment , isMarried;
appoinment = 'master';
isMarried ='false';

console.log(secondName + ' is a ' + boyosh + ' years old ' + appoinment + '. Is married ? ' +isMarried);

//alert is a popup and it need to click ok to turn it into enable
alert(secondName + ' is a ' + boyosh + ' years old ' + appoinment + '. Is married ? ' +isMarried);



//prompt is a popup window where we can put the value also
var endName = prompt('what is his last Name?');

console.log(secondName + ' ' + endName);