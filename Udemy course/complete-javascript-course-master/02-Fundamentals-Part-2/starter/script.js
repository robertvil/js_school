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


// Objects

// const robert = {
//     age: 20,
//     nationality: 'fin',
//     hight: 122

// }

// console.log(robert.nationality[0]);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'NOway',
//     job: 'Teacher',
//     friends: ['Mike', 'Hussi', 'Jobs']
// };


// console.log(jonas);

// console.log(jonas.firstName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';

// console.log(jonas['last' + nameKey]);
// console.log(jonas['first' + nameKey]);

// const interestedIN = (prompt('What do you what to know about Jonas, choose between firstName and lastName'));


// if (jonas[interestedIN]) {
//     console.log(jonas[interestedIN]);
// } else {
//     console.log('Wrong request! Choose between firstName and lastName');
// }

// jonas.location = 'Portugal';
// jonas["hobby"] = 'Pork';

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}!`);

// Object methods


// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'NOway',
//     job: 'Teacher',
//     birthYear: 1999,
//     friends: ['Mike', 'Hussi', 'Jobs'],
//     hasDriversLicense: false,
//     yearNow: 2037,

//     // calcAge: function(birthYear) { // using a function expression we can create a method inside of the object
//     //     return 2037 - birthYear;
//     // }

//     // calcAge: function() { // using a function expression we can create a method inside of the object
//     //     // console.log(this);
//     //     return this.yearNow - this.birthYear; // this variable will refer to the key inside of the object this way we don't need to set a parameters in the functions 
//     // }



//     calcAge: function() { // using a function expression we can create a method inside of the object
//         this.age = this.yearNow - this.birthYear;
//         return this.age;
//     },

//     jonasSummery: function() {
//         this.calcAge(); // this will activate the calcAge method and the this.age property will be created. This way we don't need to activate the function outside the object for this method to work!
//         return `${this.firstName} is a ${this.age} old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license!`;
//     }
    
// };

// // console.log(jonas.calcAge(jonas.birthYear)); // stay dry
// // console.log(jonas['calcAge'](jonas['birthYear']));

// // console.log(jonas.calcAge()); // stay dry
// // console.log(jonas['calcAge']());

// console.log(jonas.calcAge()); // Note when you store method in the this.age you will need to run function at least once, otherwise it will not work

// console.log(jonas.age); // This will not work without thw above code line ==>> console.log(jonas.calcAge())
// console.log(jonas.age); // This will not work without thw above code line ==>> console.log(jonas.calcAge())
// console.log(jonas.age); // This will not work without thw above code line ==>> console.log(jonas.calcAge())

// console.log(jonas.jonasSummery()); // Don't be stupid stupid! Remember to activate the fucking function!!!!

// Loops and iterations 

// console.log('rep'); // not got practice!!!
// console.log('rep'); // not got practice!!!
// console.log('rep'); // not got practice!!!
// console.log('rep'); // not got practice!!!
// console.log('rep'); // not got practice!!!
// console.log('rep'); // not got practice!!!
// console.log('rep'); // not got practice!!!
// console.log('rep'); // not got practice!!!
// console.log('rep'); // not got practice!!!


// //for loop keeps running while condition is true
// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting the weights repetition ${rep}🏋️‍♂️!`);
// }

// const jonas = [
//     'Jonas',
//     'NOway',
//     'Teacher',
//     333,
//     ['Mike', 'Hussi', 'Jobs'],
//     'Weather',
//     true,
//     1223

// ];

// const collectTypes = [];

// for(let i = 0; i < jonas.length; i++) {
//     console.log(jonas[i], typeof jonas[i]);
//     // collectTypes.push(typeof jonas[i]);

//     collectTypes[i] = typeof collectTypes[i];
// }

// console.log(collectTypes);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for(let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }

// console.log(ages);

// // continue and break
// console.log('_ _ _ _ Only strings _ _ _ _')
// for(let i = 0; i < jonas.length; i++) {
//     if(typeof jonas[i] !== 'string') continue;
//     console.log(jonas[i], typeof jonas[i]);
// }

// console.log('_ _ _ Break after first number _ _ _');
// for(let i = 0; i < jonas.length; i++) {
//     if(typeof jonas[i] === 'number') break;
//     console.log(jonas[i], typeof jonas[i]);
// }

// const jonas = [
//     'Jonas',
//     'NOway',
//     'Teacher',
//     333,
//     ['Mike', 'Hussi', 'Jobs'],
//     'Weather',
//     true,
//     1223,
//     'hi!'
// ];

// for(let i = 1; i < jonas.length + 1; i++){
//     console.log(i, jonas[jonas.length - i]);
// }

// for(let i = jonas.length - 1; i  >= 0; i--) {
//     console.log(i, jonas[i]);
// }

// for(let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`Start of the ${exercise} exercise`);

//     for(let reps = 1; reps <= 5; reps++) {
//         console.log(`  ${reps} reps in ${exercise} exercise`);
//     }

//     console.log(`End of the ${exercise} exercise `);
// }


// let rep = 1;

// while (rep <= 10){
//     console.log(rep);
//     rep++;
// }

// let deice = Math.trunc(Math.random() * 6) + 1;

// console.log(deice);

// while (deice !== 6) {
//     console.log(deice);
//     deice = Math.trunc(Math.random() * 6) + 1;
//     if (deice === 6) console.log("Loop about to end!");
// }