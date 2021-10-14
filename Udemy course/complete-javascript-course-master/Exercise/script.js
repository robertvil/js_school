'use strick';
/*Usually when you buy something, you're asked whether your credit card number, phone number or answer 
to your most secret question is still correct. However, since someone could look over your shoulder, 
you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""

// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!"*/

// function maskify(cc) {
//     let makeStr = '';
//     const splitSliceStr = (start, end) => cc.split('').slice(start, end);

//     if (cc.length > 4) {
//         for (let i = 0; i < splitSliceStr(0, -4).length; i++) makeStr += '#';

//         for (let i = 0; i < splitSliceStr(-4).length; i++)
//             makeStr += splitSliceStr(-4)[i];
//         return makeStr;
//     }
//     return cc;
// }

// console.log(maskify('343434343434444'));

// const demo = n => Number(Array.from(String(n)).sort().reverse().join(''));

// console.log(demo(23232323444));

// function createPhoneNumber(numbers) {
//     return `(${String(numbers[0]) + String(numbers[1]) + String(numbers[2])}) ${
//         String(numbers[3]) + String(numbers[4]) + String(numbers[5])
//     }-${String(numbers[6]) + String(numbers[7]) + String(numbers[8])}`;
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// seven(times(five())); // must return 35

// const zero = zero => zero;
// const one = one => 1;
// const two = two => 2;
// const three = three => 3;
// const four = four => 4;
// const five = five => 5;
// const six = six => 6;
// const seven = seven => 7;
// const eight = eight => 8;
// const nine = nine => 9;

// function plus() {
//     '+';
// }
// function minus() {
//     '-';
// }
// function times() {
//     '*';
// }
// function dividedBy() {
//     '/';
// }

// // console.log(zero(plus(one())));

// const shiftToLeft = (x, y) => x * Math.pow(2, y);

// console.log(shiftToLeft(10, 3));

// var countBits = function (n) {
//     return (1234).toString(2);
// };

// let countMatches = 0;

// const countBits = function (n) {
//     for (let i = 0; i < String(n).length; i++) {
//         for (let e = 0; e < Number(n).toString(2).length; e++) {
//             if (String(n)[i] === Number(n).toString(2)[e]) countMatches++;
//         }
//     }
// };

// console.log(countBits(12330), countMatches);
