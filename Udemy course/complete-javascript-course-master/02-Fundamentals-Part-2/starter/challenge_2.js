'use strick';


const bills = [125, 555, 44];

const calcTip = function(bill) {
    if (bill <= 300 && bill >= 100) {
        return bill * 0.15;
    } else {
        return bill * 0.20;
    }
}

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[bills.length - 1] + tips[tips.length - 1]];


const newBills = new Array(333, 343, 555);

const calcTipNew = bill => bill <= 100 && bill >= 300 ? bill * 0.15 : bill * 0.20;

const newTips = [calcTipNew(newBills[0]), calcTipNew(newBills[1]), calcTipNew(newBills[2])];
const newTotal = new Array(newBills[0] + newTips[0], newBills[1] + newTips[1], newBills[2] + newTips[2]);