/*
loops and iteration
 */

console.log('/// loops and iteration \n');

for(var i =1; i<20; i+=2){
    console.log(i);
}


var john = ['john' , 'smith' , 1998 ,'designer', 'teacher' ,false];

/*
for loop
 */

console.log('/// for loop \n');
for(var i=0 ; i<john.length; i++){
    console.log(john[i]);
}

/*
while loop
 */

console.log('/// while loop \n');
var i = 0;
while( i<john.length){
    if(typeof john[i] !== "string") continue;
    console.log(john[i]);
    i++;
}
while( i<john.length){
    if(typeof john[i] !== "string") break;
    console.log(john[i]);
    i++;
}