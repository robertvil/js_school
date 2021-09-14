'use strick'

const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tip = [];
const totals = [];

const calcTips = bill => bill >= 100 && bill <= 300 ? Math.round(bill * 0.15) : Math.round(bill * 0.20);


for(let i = 0; i <= bill.length - 1; i++) {
    let tipTemp = tip.push(calcTips(bill[i]));
    totals.push(bill[i] + tipTemp);
}

console.log(calcTips(333));
console.log(tip);
console.log(totals);
