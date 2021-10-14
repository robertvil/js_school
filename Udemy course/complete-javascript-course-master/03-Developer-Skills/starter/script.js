// Remember, we're gonna use strict mode in all scripts now!
'use strict';
//Using Google, StackOverflow and MDN

/* PROBLEM 1:
We work for a company building a smart home thermometer. Our most recent task is this: 
"Given an array of temperatures of one day, calculate the temperature amplitude. 
Keep in mind that sometimes there might be a sensor error."*/

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// //1) Understand the problem
// // - what is temp amplitude? Answer: difference between highest and lowest temp
// // - How to compute max and min temperatures?
// // - What's a sensor error? And what to do?

// //2) Breaking up into sub-problems divide and  conquer
// // - How to ignore errors?
// // - Find max value in temp array
// // - Find min value in temp array
// // - Subtract min from max and return it (amplitude)

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     if (typeof temps[i] !== 'number') continue;

//     if (temps[i] > max) max = temps[i];

//     if (temps[i] < min) min = temps[i];
//   }
//   return max - min;
// };

// console.log(calcTempAmplitude(temperatures));

//PROBLEM 2;
// Functions should now receive 2 arrays of temps

// 1) Understand the problem
// - With 2 arrays, should we implement functionality twice? NO! Just  merge two arrays

// 2) Breaking up into sub-problems
// - How to merge 2 arrays

// const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const temperatures2 = [33, -24, -6, -1, 'error', 9, 34, 15, 1, 14, 9, 5];

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2); // this array method concatenates two arrays

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     if (typeof temps[i] !== 'number') continue;

//     if (temps[i] > max) max = temps[i];

//     if (temps[i] < min) min = temps[i];
//   }
//   return max - min;
// };

// console.log(calcTempAmplitudeNew(temperatures1, temperatures2));
// Finding bugs
// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',

//     // C) Fix the bug
//     value: 23,
//   };

//   // B) Find the bug
//   console.log(measurement);
//   console.table(measurement);
//   console.log(measurement.value);
//   //   console.warn(measurement.value);
//   //   console.error(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// // A) Identify the bug
// console.log(measureKelvin());

// const temperatures3 = [9, 13, 17, 15, 14, 9, 5];
// const temperatures4 = [1, 9, 34, 15, 1, 14, 9, 5];

// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2); // this array method concatenates two arrays

//   let max = 0;
//   let min = 0;
//   for (let i = 0; i < temps.length; i++) {
//     if (typeof temps[i] !== 'number') continue;

//     if (temps[i] > max) max = temps[i];

//     if (temps[i] < min) min = temps[i];
//   }
//   console.log(max, min);
//   return max - min;
// };

// console.log(calcTempAmplitudeBug(temperatures3, temperatures4));
