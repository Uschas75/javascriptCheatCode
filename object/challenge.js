



 /*
 (function (){
    function Question(question , answer, correct){
        this.question = question;
        this.answer = answer;
        this.correct = correct;
    }
//what will do the questions array..
    Question.prototype.displayQuestion = function ()
    {
        console.log(this.question);
        for(var i =0 ; i < this.answer.length ; i++){
            console.log(i + ' : ' +this.answer[i]);
        }
    }

    Question.prototype.checkAnswer =
        function (ans){
            if(ans === this.correct){
                console.log('correct ans');
            }
            else {
                console.log('wrong ans');
            }
        }

    var q1 = new Question(
        'is javascript the coolest pl in the world',
        ['yes' , 'no'],
        0
    );

    var q2 = new Question(
        'is he tall?',
        ['yes' , 'no'],
        0
    );

    var q3 = new Question(
        'what is my name?' ,
        ['sakib ' , 'uschas' ,'nazmus'],
        2
    );

    var questions = [q1 , q2 ,q3];
    var n =Math.floor(Math.random()*questions.length);
    questions[n].displayQuestion();///the task list is given in displayQuestion

    var answer =parseInt(prompt('please select the correct answer.'));

    questions[n].checkAnswer(answer);
})();
  */

 //advanced problem

 console.log('//advanced problem \n');

 (function (){
     function Question(question , answer, correct){
         this.question = question;
         this.answer = answer;
         this.correct = correct;
     }
//what will do the questions array..
     Question.prototype.displayQuestion = function ()
     {
         console.log(this.question);
         for(var i =0 ; i < this.answer.length ; i++){
             console.log(i + ' : ' +this.answer[i]);
         }
     }

     Question.prototype.checkAnswer =
         function (ans , callback){
         var sc;

             if(ans === this.correct){
                 console.log('correct ans');
                 sc = callback(true);
             }
             else {
                 console.log('wrong ans');
                 sc =callback(false);
             }
             this.displayScore(sc);
         }

     Question.prototype.displayScore =
         function (score){
         console.log('Your current score is : ' + score);
         console.log('----------------' +
             '-----------');
         }
     console.log(Question);


     var q1 = new Question(
         'is javascript the coolest pl in the world',
         ['yes' , 'no'],
         0
     );

     var q2 = new Question(
         'is he tall?',
         ['yes' , 'no'],
         0
     );

     var q3 = new Question(
         'what is my name?' ,
         ['sakib ' , 'uschas' ,'nazmus'],
         2
     );


     var questions = [q1 , q2 ,q3];

     function score(){
         var sc = 0;
         return function (correct){
             if(correct){
                 sc++;
             }
             return sc;
         }
     }

     var keepScore =score();

     function nextQuestion(){

         var n =Math.floor(Math.random()*questions.length);
         questions[n].displayQuestion();///the task list is given in displayQuestion

         var answer =prompt('please select the correct answer.');

         if(answer !== 'exit'){
             questions[n].checkAnswer( parseInt(answer),keepScore);
              nextQuestion();
         }
     }

     nextQuestion();

 })();