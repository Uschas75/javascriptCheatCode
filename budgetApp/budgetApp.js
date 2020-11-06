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

    var Expense = function (id,description ,value){//this expense object for store each expense
        this.id = id;
        this.description = description;
        this.value = value;
    };
    var Income = function (id,description ,value){//this income object for store each expense
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var calculateTotal = function (type){//we are doing the calculation here so that no one can enter
        var sum = 0;

        //here the looping start
        data.allItem[type].forEach(function (cur){
            sum += cur.value;//here the value is get from the construction
        });
        data.totals[type] = sum;
    };


    var data = {
       allItem:{
            exp: [],
            inc: []
       },
       totals: {
            exp: 0,
            inc: 0
       },
        budget : 0,
        percentage : -1
    };

    return {
        addItem : function (type, des ,val){
            var newItem , ID;

            //create new id

            if(data.allItem[type].length > 0){//cause at the first time the array lenght is 0
                ID = data.allItem[type][data.allItem[type].length - 1].id + 1;/*here the allItem object is in the data object...allItem object has
            also two array... and each array is an instance of Income or Expense objects*/
            }
            else {
                ID = 0;
            }

            //create new item based on 'inc' or 'exp' type
            if(type === 'exp'){
                newItem = new Expense(ID,des ,val);
            }
            else if (type === 'inc'){
                newItem = new Income(ID,des ,val);//this will create an instance of each income of  income object...
            }

            //push it into our data structure
            data.allItem[type].push(newItem);//the newItem instance will  add  in data object according to the type keyword we use in the data object
            //Return the new element
            return newItem;
        },
        calculateBudget:function (){//we will calculate budget
            //calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');
            //calculate the budget income - expenses
            data.budget = data.totals.inc - data.totals.exp;
            //calculate the percentage of income that we spent
            if(data.totals.inc > 0){
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            }
            else {
                data.percentage = -1;
            }

        },
        getBudget: function (){
            return{
                budget: data.budget,
                totalInc : data.totals.inc,
                totalExp : data.totals.exp,
                percentage: data.percentage
            };
        },

        testing: function (){
            console.log(data);
        }
    };

})();

// UI controller
var UIController = (function (){
    var DOMstrings ={//we make and keyword for every class so that we need not to change manually each
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn : '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
    };


    return {
      getInput : function(){
          return {
            type : document.querySelector(DOMstrings.inputType).value,//will be either inc or exp
            description : document.querySelector(DOMstrings.inputDescription).value,
            value :parseFloat(document.querySelector(DOMstrings.inputValue).value)
          };
        },
        addListItem: function (obj , type){//when we will merge it into controller then we will pass the income and expense constructor here
            //type will come from the above one
          var html , newHtml,element;
            //create HTML string with placeholder text

            if(type === 'inc') {
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="item__date"</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }
            else if(type === 'exp'){
                element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="item__date"</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }
                //Replace the placeholder text with same  actual data

            newHtml = html.replace('%id%',obj.id);
            newHtml = newHtml.replace('%description%' , obj.description);//1st we replace the id ..then in the result we will change the description also
            newHtml = newHtml.replace('%value%' , obj.value);
            //Insert the HTML into the DOM

            document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);//all of our replaces and the html file will sit after the element...where
            //element is actually the expenses or income list class
        },

        clearFields: function (){//this is for clear the input field
            var fields, fieldArr;

            fields =  document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);//here we selecting two field using just a comma

            fieldArr = Array.prototype.slice.call(fields);//here target fields are stored as an array

            fieldArr.forEach(function (current , index ,array){//built in need to know
                current.value = "";
            });
            fieldArr[0].focus();
        },

        getDOMstrings: function (){
          return DOMstrings;
        }
    };

})();

//global app controller

var controller = (function (budgetCtrl , UICtrl) {//module can take other closure

    var setupEventListeners = function(){//this is for all event listener
        var DOM = UICtrl.getDOMstrings();
         document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);//if someone press ctrlAddItem function will occur
         //keypress event : this like we press enter to go to next field
         document.addEventListener('keypress' , function (event){//event word will pass into the function
             if(event.keyCode === 13 || event.which ===13){//13 is the value of enter key
                 ctrlAddItem();

             }

         });
     };

    var updateBudget = function (){
        //. calculate the budget
        budgetCtrl.calculateBudget();
        //2.return the budget
        var budget = budgetCtrl.getBudget();
        //3.Display the budget on the UI
        console.log(budget);
    }


    var ctrlAddItem = function (){
        var input , newItem;
        //1.get the input data
        input = UICtrl.getInput();//this  comes from UI controller

        if(input.description !== "" && !isNaN(input.value) && input.value !== 0){
            newItem = budgetCtrl.addItem(input.type , input.description , input.value);
            /* passing the value in the addItem objects */

            //3 add the item it the UI
            UICtrl.addListItem(newItem , input.type);
            //4.clear field
            UICtrl.clearFields();
            // 2.Add the item to the budget controller

            //5.calculate budget
            updateBudget();
        }



    }

    return {
        init: function (){//this init function is for call outside
            console.log('nothin');
            setupEventListeners();
        }
    };


})(budgetController , UIController);

controller.init();