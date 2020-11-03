/*
Object and properties
 */

console.log('/// Object and properties\n');

var john/*object name*/ ={
    firstName/*key name*/: 'john',/*object key property value*/
    lastName: 'smith',
    birthYear: '1995',
    family:['jane' , 'nark' ,'victor' ,'hola'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

/*
mutated data
 */

console.log('/// Object mutated data\n');

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

/*
new object syntax
*/

console.log('/// new object syntax\n');
var jane = new Object();
jane.name = 'jane';
jane.birthYear = 1969;
jane['lastName'] = 'hopes';
console.log(jane);


/*
when function added on the object then we call method
* */

console.log('/// method syntax\n');

var ron/*object name*/ ={
    firstName/*key name*/: 'john',/*object key property value*/
    lastName: 'smith',
    birthYear: '1995',
    family:['jane' , 'nark' ,'victor' ,'hola'],
    job: 'teacher',
    isMarried: false,
    calcAge: function (birthYear) {//this is the method
        return 2018 - birthYear;
    },
    totalAge: function () {
        return 2018 - this.birthYear;//the given value of birthyear at john object
    },
    settingObject: function () {//setting object value from an object
        this.setObject = 2018 - this.birthYear;//the given value of birthyear at john object
    }
};

console.log(ron.calcAge(1965));
console.log(ron.totalAge(1965));

//setting property of an object

ron.age =  ron.totalAge();//this will set the object the setObject value
ron.settingObject();//this will set the object the setObject value
console.log(ron);
console.log(ron.setObject);
