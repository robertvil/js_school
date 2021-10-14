'use strick';

const tempInC = [
  -3.5, -3, 1.8, 9.3, 15.5, 18.5, 20.5, 19.7, 14.2, 8.4, 1.9, -2.3,
];

// (0°C × 9/5) + 32 = 32°F

const tempInF = tempInC
  .filter(c => c > 0)
  .map(c => (c * 9) / 5 + 32)
  .reduce(function (sum, number) {
    return sum + number / tempInC.filter(c => c > 0).length;
  }, 0);

const avarTempC = tempInC.reduce(function (sum, number) {
  return sum + number / tempInC.length;
}, 0);

console.log(tempInF);
console.log(avarTempC);

let sum = 0;

for (let i = 0; i < tempInC.length; i++) {
  sum += tempInC[i];
}
console.log(sum);
