
console.log('////objects \n');

var john ={
    name: 'john',
    yearOfBirth: "1990",
    job: "teacher"
};


var Person = function (Nam , yearOfBirth , job){
    this.name = Nam;//Nam of this line is as same the variable pass
    //this name this the key of the object
    this.yearOfBirth = yearOfBirth;
    this.job = job;

 }

 //default for same value
Person.prototype.lastName = 'smith';

 Person.prototype.calculateAge= function (){
    console.log(2015 - this.yearOfBirth);
}//how to add object in Person constructor


var jane =new Person('jane' ,2000 , 'driver');
var john =new Person('john',1999 , 'master');

console.log(john);
john.calculateAge();
jane.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);




//object.create method

console.log('//object.create method \n');

var personProto = {
    calculateAge: function (){
        console.log(2015 - this.yearOfBirth);
    }
};

var hank = Object.create(personProto);
hank.name = 'hank';
hank.yearOfBirth = 1980;
hank.job = 'teacher';

var walt = Object.create(personProto,{
    name:{value : 'jane'},
    yearOfBirth:{value : 1980},
    job:{value:'design'}
});

//Primitives vs object

console.log('///Primitives vs object \n ');
//function
var a = 23;
var b = a;
a= 34;

console.log('///objects \n ');
console.log(a);
console.log(b);

var obj1 ={
    name: 'john',
    age: 26
};
var obj2 =obj1;
console.log(obj1.age);
console.log(obj2.age);

//function
console.log('///function \n ');

var age =27;
var obj ={
    name: 'jonas',
    city:'Lisbon'
};
function change(a ,b){
    a = 30;
    b.city = 'Gaibandha';
}

change(age , obj);

console.log(age);
console.log(obj.city);


