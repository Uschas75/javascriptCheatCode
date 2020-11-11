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
        this.percentage = -1;
    };
    //this will calculate the percentages for each
    Expense.prototype.calcPercentages = function (totalIncome){

       if(totalIncome > 0){
           this.percentage =Math.round((this.value/ totalIncome)*100);
       }
       else{
           this.percentage = -1;
       }
    };
    //this will return the percentages we calculate
    Expense.prototype.getPercentage = function (){
        return this.percentage;
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

        //calculate budget
        deleteItem: function (type , id){
            var ids ,index;
           ids =  data.allItem[type].map(function (current){//map return a brand new array
                return current.id;//this is like exp or inc array put into it...and map function convert the array into new array of id
            });
          
           index = ids.indexOf(id);

           if(index !== -1){
               data.allItem[type].splice(index, 1);//this will remove from index number and next position is for how much item need to remove
           }
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

        calculatePercentages:function(){
            data.allItem.exp.forEach(function (cur){
               cur.calcPercentages(data.totals.inc);
            });

        },

        getPercentage:function (){//this will return for each element and at least return the all
            var allPerc = data.allItem.exp.map(function (cur){
               return cur.getPercentage();
            });
            return allPerc;
        },

        getBudget: function (){
            return{//just collecting information form data object for the use of the rest of the project
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
        expensesContainer: '.expenses__list',
        budgetLabel:'.budget__value',
        incomeLabel:'.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel:'.budget__expenses--percentage',
        container : '.container',
        expensesPercLabel: '.item__percentage',
        dateLabel: '.budget__title--month'
    };
    var formatNumber = function(num ,type){
        var numSplit,int ,dec ,type;
        //+ or - before number exactly 2 decimal points comma separating the thousands
        //234.4566 -> + 234.46

        num = Math.abs(num);//we are over writing the num varibale
        num = num.toFixed(2);//here it automatically put 2 decimal  in the number;
        numSplit = num.split('.');

        int = numSplit[0];
        if(int.length > 3){
            int =  int.substr(0 , int.length -3) + ',' + int.substr(int.length - 3 , int.length);//formating numbers 23,123.00;
        }

        dec = numSplit[1];


        return  (type === 'exp' ? '-' : '+') + '' + int +'.'+ dec;
    };

    var nodeListForEach = function (list, callback){
        for(var i = 0 ; i<list.length ; i++){
            callback(list[i], i);
        }
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
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="item__date"</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }
            else if(type === 'exp'){
                element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="item__date"</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }
                //Replace the placeholder text with same  actual data

            newHtml = html.replace('%id%',obj.id);
            newHtml = newHtml.replace('%description%' , obj.description);//1st we replace the id ..then in the result we will change the description also
            newHtml = newHtml.replace('%value%' ,formatNumber(obj.value,type));
            //Insert the HTML into the DOM

            document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);//all of our replaces and the html file will sit after the element...where
            //element is actually the expenses or income list class
        },
        deleteListItem: function (selectorID){
          var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
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

        displayBudget: function (obj){//we display budget in the screen

          var type;
            obj.budget > 0 ? type = 'inc' : type = 'exp';
            document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget,type);
            document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc,'inc');
            document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp,'exp');

            if(obj.percentage > 0){
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
            }
            else{
                document.querySelector(DOMstrings.percentageLabel).textContent = '---';
            }
        },


        displayPercentages: function (percentages){
            var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);

            nodeListForEach(fields, function (current , index){
                if(percentages[index] > 0){
                    current.textContent = percentages[index] + '%';
                }
                else{
                    current.textContent = '---';
                }

            });
        },
        displayMonth:function (){
          var now, year,month,months;
          now = new Date();
          //var christmas = new Date(2016,11,25);
            months = ['January' , 'February ' ,'March', 'April' , 'May', 'June', 'July', 'August','September','October ' , 'November','December'];
            month =now.getMonth();
            year = now.getFullYear();
            document.querySelector(DOMstrings.dateLabel).textContent =year + '  ' + months[month];
        },

        changedType: function(){

          var fields = document.querySelectorAll(
              DOMstrings.inputType+ ',' +
              DOMstrings.inputDescription + ','+
              DOMstrings.inputValue
          );

          nodeListForEach(fields, function(cur){
              cur.classList.toggle('red-focus');
            });
          document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
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
         document.querySelector(DOM.container).addEventListener('click',ctrlDeleteItem);

         document.querySelector(DOM.inputType).addEventListener('change',UICtrl.changedType);
    };

    var updateBudget = function (){
        //. calculate the budget
        budgetCtrl.calculateBudget();
        //2.return the budget
        var budget = budgetCtrl.getBudget();
        //3.Display the budget on the UI
       UICtrl.displayBudget(budget);//the budget is got from budget controller return  getBudget obj
    }

    //update percentages
    var updatePercentages = function(){
      //1.Calculate percentages
    budgetCtrl.calculatePercentages();
    //2.Read percentages from budget controller
    var percentages =budgetCtrl.getPercentage();

    //3.Update the UI with the new percentages
    UICtrl.displayPercentages(percentages);

    };


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
            //6 update percentages

            updatePercentages();
        }

    };

    var ctrlDeleteItem = function (event){
        var itemID,splitID,type,ID;
        //we are target the particular id
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.id;

        if(itemID){
            //now we are going to split something id-1 become an array 'id' '1'
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);
            //1.delete the item from the data structure
            budgetCtrl.deleteItem(type, ID);
            //2.delete the item from the UI
            UICtrl.deleteListItem(itemID);//this id will go to uicontroller as selector id to remove it
            // 3.Update and show the new budget
            updateBudget();
        }
    };

    return {
        init: function (){//this init function is for call outside
            console.log('nothin');
            UICtrl.displayMonth();
            UICtrl.displayBudget({//initially set everything to zero
                budget: 0,
                totalInc : 0,
                totalExp : 0,
                percentage:-1
            });
            setupEventListeners();
        }
    };


})(budgetController , UIController);

controller.init();