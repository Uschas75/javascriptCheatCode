// var budgetController = (function (){
//    var x = 23;
//
//    var add = function (a){
//        return x + a;
//    }
//
//    return {
//        publicTest : function(b){/*we can enter this function cause this is a closure and it return the
//            function and the whole total is  the var budget controller is a module*/
//            return add(b);/*as this is a closure we can access the add function though this...after we execute the
//            budgetController function*/
//        }
//    }
// })();
//
// var UIController = (function (){
//
//     //some code
//
// })();
//
// var controller = (function (budgetCtrl , UICtrl) {//module can take other closure
//
//     var z = budgetCtrl.publicTest(19);
//
//     return{
//         anotherPublic: function (){
//             console.log(z);/*this direct go to budgetController cause z is equal to the
//             budgetCtrl.publicTest...and the value of z will sit in the **** return add(z [instead of b])***
//              */
//         }
//     }
//
// })(budgetController , UIController);
// /*
// * */
// Budget App controller

var budgetController = (function (){


})();

// UI controller
var UIController = (function (){
    var DOMstrings ={
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn : '.add__btn'
    }


    return {
      getInput : function(){
          return {
            type : document.querySelector(DOMstrings.inputType).value,//will be either inc or exp
            description : document.querySelector(DOMstrings.inputDescription).value,
            value : document.querySelector(DOMstrings.inputValue).value
          }
        },

        getDOMstrings: function (){
          return DOMstrings;
        }
    };

})();

var controller = (function (budgetCtrl , UICtrl) {//module can take other closure
    var DOM = UICtrl.getDOMstrings();
    var ctrlAddItem = function (){
        //1.get the input data
        var input = UICtrl.getInput();
        console.log(input);
        // 2.Add the item to the budget controller

        //3 add the item it the UI

        //4. calculate the budget
        console.log('endter was press');
        //5.Display the budget on the UI
    }

    document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);//if someone press ctrlAddItem function will occur


    //keypress event : this like we press enter to go to next field

    document.addEventListener('keypress' , function (event){//event word will pass into the function
        if(event.keyCode === 13 || event.which ===13){
            ctrlAddItem();

        }

    });

})(budgetController , UIController);
