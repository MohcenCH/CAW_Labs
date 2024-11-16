// Exercise 1

// 1. Swap two variables v1 and v2 in a single line of code
let v1 = 5, v2 = 10;
[v1, v2] = [v2, v1];

// 2. Concatenate the following arrays into a single array
const numbers = [1, 2, 3];
const letters = ["a", "b", "c"];
const foods = ["mango", "pecan pie"];
const combined = [...numbers, ...letters, ...foods];

// 3. Decompose a string into an array of characters using the spread operator
const str = "hello";
const strArray = [...str];

// 4. What does the args parameter contain in the following cases?
function fn(a, b, ...args) {
    console.log(args); 
}

// a) fn(1, 2, 3, 'A', 'B', 'C');
fn(1, 2, 3, 'A', 'B', 'C');

// b) fn(1, 2);
fn(1, 2);

// c) let x = ['a', 'b', 'c', 'd']; fn(...x);
let x = ['a', 'b', 'c', 'd'];
fn(...x);

// Exercise 2

// 1. Convert the following codes to ES2015 notation

// Old code:
var arr = [3, 5, 8];
var plus_one = arr.map(function (n) {
  return (n + 1);
});

// ES2015 version:
const arr = [3, 5, 8];
const plusOne = arr.map(n => n + 1);

// Old function:
function double(arr) {
  return arr.map(function (val) {
    return val * 2;
  });
}

// ES2015 version:
const double = arr => arr.map(val => val * 2);

// Old code:
var obj = {
  numbers: {
    a: 1,
    b: 2
  }
};
var a = obj.numbers.a;
var b = obj.numbers.b;

// ES2015 version:
const obj = {
  numbers: {
    a: 1,
    b: 2
  }
};
const { a, b } = obj.numbers;

// Old function:
function add(a, b) {
  if (a === 0) a = 0;
  else {
    a = a || 10;
  }
  if (b === 0) b = 0;
  else {
    b = b || 10;
  }
  return a + b;
}

// ES2015 version (using default parameters):
const add = (a = 10, b = 10) => a + b;

// Exercise 3

// 1. SetOne function to remove repeated values from an array
const setOne = arr => [...new Set(arr)];

// 2. GetRidOf function to remove val elements from a tab array
const getRidOf = (tab, ...val) => tab.filter(item => !val.includes(item));
