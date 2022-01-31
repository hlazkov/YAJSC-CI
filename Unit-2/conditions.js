/**
 * Additional Reading:
 *
 * https://learn.javascript.ru/comparison
 * https://learn.javascript.ru/ifelse
 *      or https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
 *      and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 * https://learn.javascript.ru/logical-operators
 */

/**
 * Level - Easy
 * Task - 1
 * Implement the condition for x1 variable:
 * if x1 is greater than 100 - task1 variable should be equal "Greater than 100"
 * if x1 is smaller or equal 100 - task1 variable 1 should be equal "Less than or equal 100"
 */

const x1 = 87;
let task1;

if (x1 > 100) {
    task1 = "Greater than 100";
} else {
    task1 = "Less than or equal 100";
}

/**
 * Level - Easy
 * Task - 2
 * Implement the condition for x2 variable:
 * if x2 is greater than or equal to 50 - task2 should be equal "Greater than or equal to 50"
 * if x2 is smaller than 50 and x2 is greater than -50 - task2 should be equal "In range between -50 to 50"
 * if x2 is less than or equal -50 - task2 should be equal "Less than -50"
 */

const x2 = 49;
let task2;

if (x2 >= 50) {
    task2 = "Greater than or equal to 50";
} else if (x2 < 50 && x2 >-50) {
    task2 = "In range between -50 to 50";
} else {
    task2 = "Less than -50";
}

/**
 * Level - Easy
 * Task - 3
 * Implement the logic
 * when y3 is less than 10 - task3 is equal to sum of x3 and y3
 * when y3 is greater or equal than 10 - task3 is equal multiplication of x3 and y3
 */
let task3;
const x3 = 3;
const y3 = 7;

if (y3 < 10) {
    task3 = x3 + y3;
} else {
    task3 = x3 * y3;
}

/**
 * Level - Normal
 * Task - 4
 * Implement the same logic as in Task:3
 * assign result to task4 variable
 * but use ternary operator instead of if-else
 * NOTE: x3 and y3 are used from Task:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */
let task4;

(y3<10) ? (task4=x3 + y3) : (task5 = x3 * y3);


/**
 * Level - Easy
 * Task - 5
 * You have 2 numbers ("num1" and "num2") and an "operator".
 * "operator" can equal to - "add" or "subtract" or "multiply" or "divide".
 *
 * Implement the logic when the system
 * does appropriate mathematical operation of 2 numbers ("num1" and "num2") based on "operator" param.
 * Assign result to task5 variable
 *
 * Level - Normal:
 * Try to implement the same logic using "switch-case"
 * Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
 */
let task5;
const num1 = 3;
const num2 = 7;
const operator = "add";

switch (operator) {
    case "add":
        task5 = num1 + num2;
        break;
    case "subtract":
        task5 = num1 - num2;
        break;
    case "multiply":
        task5 = num1 * num2;
        break;
    case "divide":
        task5 = num1 / num2;
        break;
}

/**
 * Level - Normal
 * Task - 6
 * Implement the condition for productPrice variable:
 * if productPrice is greater than or equal to 1000 - discount should be equal 0.3
 * if productPrice is smaller than 1000 and greater than 0 - discount should be equal 0.2
 * if productPrice is less than 0 - discount should be equal null
 * otherwise - discount should be equal undefined
 * assign the discount to task6 variable
 */

const productPrice = 49;
let discount;
let task6;

if (productPrice >= 1000) {
    discount = 0.3;
} else if (productPrice < 1000 && productPrice > 0) {
    discount = 0.2;
} else if (productPrice < 0) {
    discount = null;
} else {
    discount = undefined;
}
task6 = discount;



/**
 * Level - Normal
 * Task - 7
 * Write the logic that will calculate the amount of discount
 * considering the 'totalPrice' amount
 * Rules are the following:
 * - 0    - 350:  0
 * - 351  - 1350: 15
 * - 1351 - 2700: 30
 * - 2701 - 6500: 45
 * assign the result to the 'task7' variable
 */
const totalPrice = 420;
let task7;

if (0 <= totalPrice && totalPrice <=350 ) task7 = 0
else if (351 <=totalPrice && totalPrice <= 1350) task7 = 15
else if (1351 <=totalPrice && totalPrice <= 2700) task7 = 30
else if (2701 <=totalPrice && totalPrice <= 6500) task7 = 45

/**
 * Hardcore tasks from codewars.com:
 *
 * You have to google different methods available for Number object in JS
 *  -specifically how to round numbers in JS
 *
 * https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6
 * https://www.codewars.com/kata/582cb0224e56e068d800003c
 * https://www.codewars.com/kata/57a386117cb1f31890000039
 * https://www.codewars.com/kata/55a70521798b14d4750000a4
 */


module.exports = {
    x1, task1,
    x2, task2,
    x3, y3, task3,
    task4,
    num1, num2, operator, task5,
    productPrice, discount, task6,
    totalPrice, task7
};
