/**
 * Additional Reading:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 */

/**
 * Level - Easy
 * Task - 1
 * Implement algorithm which will calculate sum of numbers from 0 to 10 (included)
 * Use 3 different cycles: for | while | do..while
 * Please store the result in correspondent variables:
 * task1For, task1while, task1Do
 */

let task1For = 0, task1while = 0, task1Do = 0;

task1For;
let i = 0;
for (i = 0; i<=10; i++ ) {
      task1For = task1For+i;
}
  



task1while;
let a = 0;
while (a<=10){
       a++;
       task1while+=a;
}

task1Do;
let b = 0;
do {
  b = b+1;
  task1Do+=b;
} while(b>=10)


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

x = [-238, 320]
task2Res = 0;
for (i in x)
task2Res+=x;


/**
 * Level - Easy
 * Task - 3
 * Implement algorithm which will
 * make a string from an array of letters
 * Use for..of loop
 * Please store the result in task3Res variable
 * hint: to get an array length you can use "length" property
 * (i.e. task3Array.length is equal 9)
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
 */

const task3Array = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]; // => "ABCDEFGHI"
let task3Res = '';

for (let task3Res of task3Array) {
    console.log(task3Res);
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

for (i in task4personIncomes)
    task4TotalIncome+=1;

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


for (let i =0; i <=task5n, i++)
     task5DoFactorial*=1;


task5WhileFactorial;
let c = 10;
while (c<=task5n){
       c++;
       task5WhileFactorial*=c;
}

task5DoFactorial;
let d = 10;
do {
  d = d+1;
  task5WhileFactorial*=d;
} while(d<=task5n)


/**
 * Level - Normal
 * Task - 6
 * Implement algorithm which will
 * make a string of every second letter from an array of letters
 * Please store the result in task6Res variable
 * hint: you can use loops with numbers to access elements in array
 */

const task6Array = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]; // => "BDFH"
let task6Res = '';

for (i=0;i<task6Array.length; i++)
     task6Res = task6Res + (task6Array[i].task6array.length+1);
    console.log(task6Res);


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

for (i=1;i<task7Array.length; i--)
     task6Res = task6Res +(task7Array[i].task7array.length-1);
    console.log(task7Res);


/**
 * Level - Normal
 * Task - 7
 * Implement algorithm that will
 * use in an array of numbers and returns the sum of all the even numbers in the given array.
 * Please store the result in task8Res variable
 * NOTE: use a `for` loop to iterate over the array and check if each number is even
 */

const task8Array = [2, 7, 15, 1, 0, 100200];
let task8Res = 0;

for (i of task8Array)
     i %2 === 0;
    task8Res+=i;


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
  task7Array, task7Res, task8Array, task8Res
};


function myfunction()
{
  console.log('Hello world')
}

let v = myfunction;
console.log(v());
