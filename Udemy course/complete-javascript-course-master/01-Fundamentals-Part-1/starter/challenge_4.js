// A simple tip calculator, the chalange is to use conditional operator aka ternary operator


// const bill = Number(prompt("Please enter your bill amount!"));

// console.log(`The bill was ${bill}$, the tip in dollars was ${tip = bill >= 50 && bill <= 300 ? bill * 15 / 100 : bill * 20 / 100}$ and in presents it was ${bill >= 50 && bill <= 300 ? '15%' : '20%'}. The final bill was ${tip + bill}$.`);



const bill = Number(prompt("Please enter your bill amount!"));
const tip =  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
const tipPercent = bill >= 50 && bill <= 300 ? '15%' : '20%';

console.log(`The bill was ${bill}$, the tip in dollars was ${tip}$ and in presents it was ${tipPercent}. The final bill was ${tip + bill}$.`);