
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

