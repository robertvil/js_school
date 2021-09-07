  

// let sj = 'amazing';
// console.log(12 + 23423 + 3434 / 110);

// console.log('Jonas');

// let firstName = 'Jonas'

// console.log(firstName + ' ' + 'Jonaitis');

// console.log(true);

// let javascriptIsFun = true;

// console.log(javascriptIsFun);

// console.log(typeof javascriptIsFun); // typeof shows the type of data 

// let number = 12.090909;

// console.log(typeof number); // typeof shows the type of data 

// let empty;

// console.log(typeof empty);

// empty = 2323;

// console.log(typeof empty);

// console.log(typeof null);

// const immutable = 34;

// // immutable = 'do not change'

// console.log(immutable);

// let age = 20;
// age = 30;

// const birthYear = 1333; // when 'const' is used to declare a variable it can't be change latter, it is now a immutable variable

// birthYear = 3434;


// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);


// const firstName = 'Jonas';
// const lastName = 'Schmedtmann'

// console.log(firstName + ' ' + lastName)


// Assignment operators
// let x = 10;
// x += 5;

// x++; // this will add  one to x so x = x + 1

// x--; // this will subtract one from x so x = x - 1
// x--;

// console.log(x);

// Comparison operators

// console.log(ageJonas < ageSarah);
// console.log(ageSarah >= 18);

// console.log(now - 1991 < now - 2018);

// let x, y;

// x = y = 20 - 10 - 5;

// console.log(x, y);


// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const currentYear = 2037;

// const jonas = "I'm " + firstName + ' a ' + (currentYear - birthYear) + ' years old ' + job + '.';

// console.log(jonas);

// // template literals
// const jonasNew = `I'm ${firstName} a 
// ${currentYear - birthYear} years old ${job}.`

// console.log(jonasNew);

// const age = 12;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//     console.log('You are old enough');
// } else {
//     console.log('You are not old enough');
// }

// const age = 10;

// if (age >= 18) {
//     console.log('You are old enough to drive a car');
// } else if (age >= 16) {
//     console.log('You are old enough to drive a moped');
// } else {
//     const yearLeft = 18 - age;
//     console.log(`You are not old enough to drive, you gave ${yearLeft} years/year before you can get driving license`);
// }   


// const demo = 110;

// switch (demo) {
//     case 112:
//         console.log(`This is a large number ${demo}`)
//         break;
//     case 111:
//         console.log(`This is a smaller number ${demo}`)
//         break;
//     default:
//         console.log(`This is not a number ${demo}`)
// }

// // type conversion 
// const inputYear = '1992';
// console.log(Number(inputYear) + 18);

// console.log(Number('Hohohoh'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion

// console.log('i am ' + 23 + ' years old');

// console.log('23' +  '10' - 3);

// console.log('23' * 20);
// console.log('23' > '12');

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('johanas'));
console.log(Boolean({})); // empty object 
console.log(Boolean(''));

const money = 10;
if (money){
    console.log("Don't spend it all ;)");
} else{
    console.log("You should get a job!");
}

let height;

if (height){
    console.log('Hight is defined');
} else{
    console.log('Hight id UNDEFINED!');
}