var john = {
    bills : [124 , 48 , 268 ,180 , 42],
    tips: [],
    totalBills: [],
    total: 0,
    average :0 ,
    tipsCalc : function (){
        for(var i = 0 ; i < this.bills.length ; i++) {
            if (this.bills[i] < 50) {
                this.tips[i] = this.bills[i] * .20;
                 this.totalBills[i] = this.tips[i] + this.bills[i];
            }
            else if(this.bills[i] > 50 && this.bills[i] < 200) {
                this.tips[i] = this.bills[i] * .15;
                 this.totalBills[i] = this.tips[i] + this.bills[i];
            }
            else
            {
                this.tips[i] = this.bills[i] * .10;
                 this.totalBills[i] = this.tips[i] + this.bills[i];
            }
            this.total = this.totalBills[i]+this.total;
        }
        this.average = this.total/this.bills.length;
    }
}
john.tipsCalc();
console.log(john);

var mark = {
    bills : [77 , 375 , 110 ,45 ],
    tips: [],
    totalBills: [],
    total: 0,
    average :0 ,
    tipsCalc : function (){
        for(var i = 0 ; i < this.bills.length ; i++) {
            if (this.bills[i] < 100) {
                this.tips[i] = this.bills[i] * .20;
                this.totalBills[i] = this.tips[i] + this.bills[i];
            }
            else if(this.bills[i] > 100 && this.bills[i] < 300) {
                this.tips[i] = this.bills[i] * .10;
                this.totalBills[i] = this.tips[i] + this.bills[i];
            }
            else
            {
                this.tips[i] = this.bills[i] * .25;
                this.totalBills[i] = this.tips[i] + this.bills[i];
            }
            this.total = this.totalBills[i]+this.total;
        }
        this.average = this.total/this.bills.length;
    }
}
mark.tipsCalc();
console.log(mark);

var heighestBills = john.average > mark.average  ?  'john has height average ' +john.average :   ' has height average ' +mark.average;
console.log(heighestBills);