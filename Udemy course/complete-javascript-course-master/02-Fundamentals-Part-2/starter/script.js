'use strict'; // THis string line will activate js's strick mode, so it is more secure less bugs 

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;

// if (hasDriversLicense) console.log('i can drive');

// function demo(number){
//     console.log(`Your number is ${number}`);
//     return number ** 2;
// }

// demo(prompt('Give a random number:'));

// const powNumber = demo(4);

// console.log(powNumber);

// function logger() {
//     console.log(' my name is ');
// }

// // calling /  running / invoking function
// logger();
// logger();
// logger();
// logger();
// logger();
 

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }


// const appleJuice = fruitProcessor(5,0);

// console.log(appleJuice);

// console.log(fruitProcessor(5,0));

// const appleOrangeJuice = fruitProcessor(2,5);

// console.log(appleOrangeJuice);

// const age1 = calcAge1(1223); // note that you can call function before it was defined, but only if function is declared. If it a function expression it will not work

// function calcAge1(birthYear) { // function declaration
//     return 2037 - birthYear;
    
// }

// const age1 = calcAge1(1223)

// console.log(calcAge1(1245));


// const calcAge2 = function (birthYear) { // function expression
//     return 2037 - birthYear;
// }

// console.log(calcAge2(1212));


// // Arrow function

// const age = birthYear => 2037 - birthYear;

// console.log(age(1223));


// const yearUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement}!`
// }

// console.log(yearUntilRetirement(1998, 'Marly'));


// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {

//     const applePieces = cutFruitPieces(apples);
//     const orangesPieces = cutFruitPieces(oranges);

//     console.log(apples, oranges);
//     const juice = `juice with ${apples} apples and ${oranges} oranges. We did get ${applePieces} apple pieces and we got ${orangesPieces} orange pieces`;
//     return juice;
// }


// console.log(fruitProcessor(4,6));

// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// }


// const yearUntilRetirement = function(birthYear, firstName) {
//     const retirement = 65 - calcAge(birthYear);

//     if(retirement > 0){
//         return retirement;
//     } else {
//         return `${firstName} already retired`;
//     }

//     // return `${firstName} retires in ${retirement} years!`
// }


// console.log(yearUntilRetirement(1988, 'bob'));
// console.log(yearUntilRetirement(1222, 'james'));

// let temp = 0;

// for(let i = 0; i <= 5; i++) {
//     temp += 1;
// }

// console.log(temp);

// let temp2 = 0;

// while (temp2 <= 10) {
//     console.log(temp2++);
// }

// let friendList = ['Masha', 'Dasha', 'Kolya'];

// console.log(friendList[2]);


// const friends = ['Me', 'Me again', 'And me'];

// console.log(friends);

// const years = new Array(1323, 2323, 232323, 2323, '3434')

// console.log(years)

// console.log(friends[0]);

// console.log(friends[2]);

// console.log(friends.length); // this property show how many values are in the array
// console.log(friends[friends.length - 1]); // This will help to find the last value in the array!

// friends[2] = 'Jay';

// console.log(friends);

// const nationality = 'Fin?'

// const jonas = ['jo', 'she', 2037 - 1882, nationality, friends];

// console.log(jonas);
// console.log(jonas.length);



// const calcAge2 = function (birthYear) { // function expression
//     return 2037 - birthYear;
// }

// const yearsNew = [1999, 1953, 2020, 2000];

// const age1 = calcAge2(yearsNew[0]);
// const age2 = calcAge2(yearsNew[2]);
// const age3 = calcAge2(yearsNew[yearsNew.length - 1]);

// console.log(age1, age2, age3);

// const ages = [calcAge2(yearsNew[0]), calcAge2(yearsNew[1]), calcAge2(yearsNew[2])];
// console.log(ages);

// for (let i = 0; i <= yearsNew.length - 1; i++) {

//     console.log(calcAge2(yearsNew[i]));
// }

// // example for Slava!

// let temp = 0;

// for (let i = 0; i <= 5; i++){
//     console.log(i, temp += i);
// }


// const text = 'hello'

// const newArray = []

// for (let i = 0; i <= text.length - 1; i++){
//     newArray.push(text[i]);
// }

// console.log(newArray);


// let m = 0;

// for (let i = 0; i <= 5; i = i + 1 ) {
//     m += i;
    
//     console.log(`Krug Nr ${i}, nahodim nashhu peremnnuju 'm': ${m}(m) + ${i}(i) = ${m} (summa 'm' na etom krugu)`);
// }

// array methods

// const friends = ['Me', 'Me again', 'And me'];

// const newLenght = friends.push('Jay'); // push returns length on the string

// friends.unshift('Dima'); // also returns length on the string

// // Remove element

// const popped = friends.pop(); // Returns removed element

// friends.shift(); // Returns removed element

// console.log(friends.indexOf('Me')); // Displays chosen element index

// console.log(friends.includes('Me')); // Returns true if the element is in the array

// if (friends.includes('Me')) {
//     console.log('This is you');
// }