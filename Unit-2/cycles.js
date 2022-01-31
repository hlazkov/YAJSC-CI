/**
 * Additional Reading:
 *
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/break
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/while
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/do...while
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for...in
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for...of
 */

/**
 * Level - Easy
 * Task - 1
 * Implement algorithm which will calculate sum of numbers from 0 to 10
 * Use 3 different cycles: for | while | do..while
 * Please store the result in correspondent variables:
 * task1For, task1while, task1Do
 */

let task1For = 0, task1while = 0, task1Do = 0;

// Task - 1: "for" algorithm

for(let i = 0; i <= 10; i++) {
  task1For += i;
}

// Task - 1: "while" algorithm
let whileI = 0;
while (whileI <=10) {
  task1while += whileI;
  whileI++;
}

// Task - 1: "do..while" algorithm
let whileDo = 0;
do {
  task1Do += whileDo;
  whileDo++;
} while (whileDo <=10)

/**
 * Level - Easy
 * Task - 2
 * Implement algorithm which will
 * calculate sum of numbers from task2x to task2y (included)
 * Use for loop
 * Please store the result in task2Res variable
 */

const task2x = -238;
const task2y = 320;
let task2Res = 0;

for(let i = task2x; i <= task2y; i++) {
  task2Res += i;
}

/**
 * Level - Easy
 * Task - 3
 * Implement algorithm which will
 * make a string from an array of letters
 * Use for..of loop
 * Please store the result in task3Res variable
 * hint: to get an array length you can use "length" property
 * (i.e. task3Array.length is equal 9)
 */

const task3Array = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]; // => "ABCDEFGHI"
let task3Res = '';

for (let i of task3Array) {
  task3Res += i;
}

/**
 * Level - Easy
 * Task - 4
 * calculate a total income for certain person
 * assign the result to the variable 'task4TotalIncome'
 * Use for..in loop
 */
let task4TotalIncome = 0;
const task4personIncomes = {
  salary: 4000,
  rent: -823,
  grocery: -528,
  otherExpenses: -350,
  depositIncome: 281,
};

for (let k in task4personIncomes) {
  task4TotalIncome += task4personIncomes[k];
}

/**
 * Level - Normal
 * Task - 5
 * implement algorithm which calculates factorial for task5n
 * using for, while, do..while operators
 * assign the result to corresponding variable
 * hint: https://math-prosto.ru/ru/pages/factorial/factorial/
 */
let task5ForFactorial = 1, task5WhileFactorial = 1, task5DoFactorial = 1;
const task5n = 10; //10! = 3628800

// Task - 5: "for" algorithm
for (let i = 1; i <=task5n; i++) {
  task5ForFactorial *= i;
}

// Task - 5: "while" algorithm
let iWhile = 1;
while (iWhile <= task5n) {
  task5WhileFactorial *= iWhile;
  iWhile++;
}

// Task - 5: "do" algorithm
let iDo = 1;
do {
  task5DoFactorial *= iDo;
  iDo++;
} while (iDo <= task5n)

/**
 * Level - Normal
 * Task - 6
 * Implement algorithm which will
 * make a string of every second letter from an array of letters
 * Please store the result in task6Res variable
 */

const task6Array = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]; // => "BDFH"
let task6Res = '';

for (let i = 1; i < task6Array.length; i = i+2) {
  task6Res = task6Res + task6Array[i];
}

/**
 * Level - Normal
 * Task - 7
 * Implement algorithm which will
 * make a string of every second letter from an array of letters
 * NB!!! - letters should be taken it from the end - see example below
 * Please store the result in task7Res variable
 * NOTE: don't use array.reverse() method
 */

const task7Array = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]; // => "IGECA"
let task7Res = '';

for (let i = task7Array.length-1; i >= 0 ; i = i-2) {
  task7Res = task7Res + task7Array[i];
}

/**
 * Hardcore tasks from codewars.com:
 *
 * https://www.codewars.com/kata/59fb783bab11f89202001083
 * https://www.codewars.com/kata/5a2cb4bff28b820c33000082
 * https://www.codewars.com/kata/5b6db1acb118141f6b000060
 * https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1
 */

module.exports = {
  task1For, task1while, task1Do,
  task2x, task2y, task2Res,
  task3Array, task3Res,
  task4personIncomes, task4TotalIncome,
  task5n, task5ForFactorial, task5WhileFactorial, task5DoFactorial,
  task6Array, task6Res,
  task7Array, task7Res
};
