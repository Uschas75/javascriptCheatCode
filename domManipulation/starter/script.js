
var scores, roundScore ,activePlayer , dice , gamePlaying , diceStore ,targetScore;

init();
function enterLimit() {
    targetScore = document.getElementById("targetScore").value;
}
document.querySelector('.btn--roll').addEventListener('click', function(){

    if(gamePlaying){
        // 1.random number
        var dice1 = Math.floor(Math.random()*6) +1;//random() will create number between 0 to 1 and floor will remove decimal part (e.g : floor(0.7980) = 0)
        var dice2 = Math.floor(Math.random()*6) +1;//random() will create number between 0 to 1 and floor will remove decimal part (e.g : floor(0.7980) = 0)


        diceStore[1] = dice;
        //2 display the result
        document.getElementById('dice-1').style.display= 'block';
        document.getElementById('dice-2').style.display= 'block';

        document.getElementById('dice-1').src = 'dice-' + dice1 +'.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 +'.png';


        //3. Update the round score If the rolled number was not a 1
        // if(diceStore[0] === 6 &&  diceStore[1] === 6){
        //     scores[activePlayer] = 0;
        //     //update the ui
        //     document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];
        //     nextPlayer();
        // }
        if(dice1 !== 1 && dice2 !== 2) {
            //Add score
            roundScore += dice1 + dice2;
            document.querySelector('#current--' + activePlayer).textContent = roundScore;
        }
        else {
            nextPlayer();
        }

        // diceStore[0] = dice;

    }

}); //addEventListener means what will happen after that even


document.querySelector('.btn--hold').addEventListener('click', function(){

    if(gamePlaying){
        //Add current score to global score
        scores[activePlayer] += roundScore;

        //update the ui
        document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];
        //check if player won the game
        if(scores[activePlayer] >= targetScore) {
            document.querySelector('#name--' + activePlayer).textContent = 'Winner';
            document.getElementById('dice-1').style.display= 'none';
            document.getElementById('dice-2').style.display= 'none';

            document.querySelector('.player--' + activePlayer).classList.add('player--winner');
            document.querySelector('.player--' + activePlayer).classList.remove('player--active');
            gamePlaying =false;
        }
        else{
            nextPlayer();
        }
    }



});



function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1: activePlayer = 0;//if activePlayer equal to 0 then activePlayer = 0 and if not then acivePlayer equal 1;
    roundScore = 0;

    // diceStore[0] = 0;
    // diceStore[1] = 0;

    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';


    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');

    // document.querySelector('.player--0').classList.remove('player--active');
    //document.querySelector('.player--1').classList.add('player--active');
    document.getElementById('dice-1').style.display= 'none';
    document.getElementById('dice-2').style.display= 'none';

}


document.querySelector('.btn--new').addEventListener('click' ,init);



function init(){
    scores = [0 , 0];
    roundScore = 0;
    activePlayer = 0;
    targetScore=100;
    // diceStore = [];
    // diceStore[0] = 0;
    // diceStore[1] = 0;

    document.getElementById('dice-1').style.display= 'none';
    document.getElementById('dice-2').style.display= 'none';

    gamePlaying =true;
    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';
    document.getElementById('name--0').textContent = 'Player 1';
    document.getElementById('name--1').textContent = 'Player 2';
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1' ).classList.remove('player--winner');
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1' ).classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');

};


/*

dice = Math.floor(Math.random()*6) +1;//random() will create number between 0 to 1 and floor will remove decimal part (e.g : floor(0.7980) = 0)
console.log(dice);

document.querySelector('#current--'+ activePlayer).textContent = dice;//here document will make every thing object
//then querySelector will select according to the element e.g here the id current element
//textContent will target the text only no html
document.querySelector('#current--'+ activePlayer).innerHTML = '<em>' +dice +'</em>';
//that's how we can bring out the  html element...e.g. here the em which will make the em italic.

var x = document.querySelector('#score--0').textContent;//by the help of the document we get the value of the selected element ...here for id the value is 43;
console.log(x);

document.querySelector('.dice').style.display = 'none';//here .style method help to work on the selected element;

 */