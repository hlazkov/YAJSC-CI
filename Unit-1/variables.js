/**
 * Additional Reading:
 *
 * https://learn.javascript.ru/variables
 * https://learn.javascript.ru/types
 * https://learn.javascript.ru/operators
 * https://learn.javascript.ru/type-conversions
 * https://habr.com/ru/company/ruvds/blog/347866/
 */

/**
 * Create "var" variable named myNum and set its value equal to 74
 * Level - Easy
 */

var myNum = 74;

/**
 * Create "let" variable named myText and set its value equal to "Jack"
 * Level - Easy
 */

let myText = 'Jack'

/**
 * Create "const" variable named myBool and set its value equal to false
 * Level - Easy
 */

const myBool = false;

/// Starting from here I'd recommend to use let (or const if applicable) variables

/**
 * Create variable named myNull and set its value equal to null
 * Level - Easy
 */

let myNull = null;

/**
 * Create variable named myUndefined and set its value equal to undefined
 * Level - Easy
 */

let myUndefined = undefined;

/**
 * Create variable named myArr and set its value to be an array of numbers from 2 to 7
 * Level - Easy
 */

let myArr = [2,3,4,5,6,7];

/**
 * Create variable named fourthElement and set its value to be myArr 4th element
 * NOTE: you should use myArr variable here
 * Level - Easy
 */

let fourthElement = myArr[3];

/**
 *  Create variable named myNum2 and set its value equal myNum divided by 2
 *  NOTE: you should use myNum variable here
 *  Level - Easy
 */

let myNum2 = myNum / 2;

/**
 * Create variable named myText2 and set its value equal to "Jack is 37"
 * NOTE: Use myText and myNum2 variables to solve it
 * Level - Easy
 */

let myText2 = myText + " is " + myNum2;

/**
 * Create variable named myBool2 and set its value to be equality comparison (not strict) of myNum and myNum2 variables
 * Level - Normal
 */

let myBool2 = myNum == myNum2;

/**
 * Create variable named myBool3 and set its value to be strict equality comparison of myNum2 variable and "37"
 * NOTE: string should be used
 * Level - Normal
 */

let myBool3 = myNum2 === "37"

/**
 * Create variable named myUndefined2 and set its value equal to without "undefined" word usage
 * Level - Normal
 */

let myUndefined2;

/**
 * Create variable named myObj and set its value as object with key firstName and value "John"
 * Level - Easy
 */

let myObj = {firstName: "John"};

/**
 * Set new key/property to human object named lastName with value "Dou"
 * Level - Easy
 */

myObj.lastName = "Dou";

/**
 * Set new key/property to human object named fullName with value of concatenation of firstName, space, and lastName
 * NOTE: you should use
 * Level - Easy
 */

myObj.fullName = myObj.firstName + " " + myObj.lastName;

module.exports = {
    myNum, myText, myBool, myNull, myUndefined,
    myArr, fourthElement,
    myUndefined2, myNum2, myText2,
    myBool2, myBool3,
    myObj
};
