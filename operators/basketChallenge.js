var john1 = 89;
var john2 =120;
var john3 = 103;

var mike1 = 116;
var mike2 = 94;
var mike3 = 123;

var mary1 = 97;
var mary2 = 134;
var mary3 = 185;

var johnAverage =(john1+john2+john3)/3;
var mikeAverage =(mike1+mike2+mike3)/3;
var maryAverage =(mary1+mary2+mary3)/3;

if(johnAverage > mikeAverage && mikeAverage > maryAverage ){
    console.log('The winner is john team','john average is  ' + johnAverage, 'Mike average is  ' + mikeAverage ,  'Mary average is  ' + maryAverage );
}
else if(johnAverage < mikeAverage && mikeAverage < maryAverage ){
    console.log('The winner is mary team','john average is  ' + johnAverage, 'Mike average is  ' + mikeAverage ,  'Mary average is  ' + maryAverage );
}
else if(johnAverage > mikeAverage && mikeAverage > maryAverage ){
    console.log('The winner is mike team','john average is  ' + johnAverage, 'Mike average is  ' + mikeAverage ,  'Mary average is  ' + maryAverage );
}
else{

        console.log('draw','john average is ' + johnAverage, 'Mike average is  ' + mikeAverage );
}