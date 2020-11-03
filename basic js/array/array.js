/*
array
 */

console.log('///   array');

var names = ['john' , 'walk' , 'gus' ,'desiner', 'marie'];

console.log(names);//all items 0, 1 ,2 ,3 ..
console.log(names[1]);//2nd item
console.log(names.length);//length of the array

// Mutate array data

console.log('///  Mutate array data');
names[1] = 'ben';
names[names.length] ='pinkMan';
console.log(names);

//Different Data type
console.log('///   Different Data type');

var john = ['john' , 'smith' , 1998 ,'designer', 'teacher' ,false];

//add part
john.push('blue');//adding at the last of an array;
john.unshift('mr');//adding at the first of an array
console.log(john);


//remove part
john.pop();//remove from the last; here the 'blue'
john.shift();//remove from the first here john
console.log(john);


console.log('present or not ...if present then the index is  '+john.indexOf('teacher'));//check it is present in the array or not then return the result of the index
//if not then return -1;
console.log('when there is no match' + john.indexOf('driver'));

var isDesign = john.indexOf('designer') === -1 ? 'john is not a designer' : 'john is a designer  ' + 3;
console.log(isDesign);