// var numbers = [3, 56, 2, 48, 5];

// //Map -Create a new array by doing something with each item in an array.
// // example

// function double(x) {
//   return x * 2;
// }
// const mo = numbers.map(double);
// console.log(mo);
// const neW = numbers.map(function (x) {
//   return x * 2;
// });
// console.log(neW);

// //Filter - Create a new array by keeping the items that return true.
// var number = [3, 56, 2, 48, 5];

// var moh = number.filter(function (m) {
//   return m > 4;
// });
// console.log(moh);
// //Reduce - Accumulate a value by doing something to each item in an array.
// var num = [1, 2, 3, 4];
// var coco = num.reduce(function (acc, cuurentNu) {
//   return acc * cuurentNu;
// });
// console.log(coco);

// //Find - find the first item that matches from an array.
// var fin = num.find(function (currentN) {
//   return currentN === 2;
// });
// console.log(fin);
// var fino = numbers.findIndex(function (m) {
//   return m > 10;
// });
// //FindIndex - find the index of the first item that matches.
// console.log(fino);
// var  dodo = numbers.filter( m => m > 5);
// console.log(dodo);
import emojipedia from "./emojipedia";
console.log(emojipedia);

var mo = emojipedia.map(function (m) {
  return m.meaning.substring(1, 100);
});
console.log(mo);
