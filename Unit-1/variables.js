/**
 * Additional Reading:
 *
 * https://learn.javascript.ru/variables
 * https://learn.javascript.ru/types
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array
 * https://learn.javascript.ru/operators
 * https://learn.javascript.ru/type-conversions
 * https://habr.com/ru/company/ruvds/blog/347866/
 */

/**
 * Level - Easy
 * Create "var" variable named myNum and set its value equal to 74
 */

var myNum = 74;

/**
 * Level - Easy
 * Create "let" variable named myText and set its value equal to "Jack"
 */

let myText = "Jack";

/**
 * Level - Easy
 * Create "const" variable named myBool and set its value equal to false
 */

const myBool = false;

///
/// ----- Starting from here I'd recommend to use let (or const if applicable) variables
///

/**
 * Level - Easy
 * Create variable named myNull and set its value equal to null
 */

myNull = null;

/**
 * Level - Easy
 * Create variable named myUndefined and set its value equal to undefined
 */

let myUndefined = undefined;

/**
 * Level - Easy
 * Create variable named myArr and set its value to be an array of numbers from 2 to 7
 */

let myArr = [2,3,4,5,6,7];

/**
 * Level - Easy
 * Create variable named myArr1 and set its value to be an empty array
 */

let myArr1 = [];

/**
 * Level - Normal
 * Make first array element to be equal to 'I am the first'
 */

let myArr1_1 = ["I am the first"];
// enter your code here

/**
 * Level - Normal
 * Create variable named myArr2 and set its value to be an empty array using Array constructor
 * NOTE: use `new Array` syntax
 */

let myArr2 = new Array();

/**
 * Level - Normal
 * Create variable named myArr3 and set its value to be an array of lenght 3 and have empty elements
 * use Array constructor
 * NOTE: use `new Array` syntax
 */

let myArr3 = new Array (3);
console.log(myArr3.length)

/**
 * Level - Normal
 * Create variable named myArr4 and set its value to be an array of lenght 4 and have next elements:
 * first element = 10
 * second element = null
 * third element = "I'm the third one"
 * fours element = false
 * use Array constructor
 * NOTE: use `new Array` syntax
 */

let myArr4 = new Array(10, null, "I'm the third one", false);

/**
 * Level - Easy
 * Create variable named fourthElement and set its value to be myArr 4th element
 * NOTE: you should use myArr variable here
 */

let fourthElement = myArr[3];
console.log("myArr=", myArr);
console.log("myArr[3]=", myArr[3]);

/**
 * Level - Easy
 * Create variable named arrayOperations and set its value to be myArr 4th element minus myArr 3d element
 * NOTE: you should use myArr variable here
 */

let arrayOperations = myArr[3] - myArr[2];

/**
 * Level - Easy
 * Create variable named myNum2 and set its value equal myNum divided by 2
 * NOTE: you should use myNum variable here
 */

let myNum2 = myNum / 2;

/**
 * Level - Easy
 * Create variable named myText2 and set its value to be myText, then goes space and word is, then space and myNum2
 * NOTE: Use myText and myNum2 variables to solve it. Result should be something like "George is 21"
 */

let myText2 = myText + " is " + myNum2;
console.log(myText2);

/**
 * Level - Normal
 * Create variable named myBool2 and set its value to be equality comparison (not strict) of myNum and myNum2 variables
 */

let myBool2 = (myNum == myNum2);

/**
 * Level - Normal
 * Create variable named myBool3 and set its value to be strict equality comparison of myNum2 variable and "37"
 * NOTE: string should be used
 */

let myBool3 = (myNum2 === "37");

/**
 * Create variable named myUndefined2 and set its value equal to without "undefined" word usage
 */

let myUndefined2;

/**
 * Level - Easy
 * Create variable named myObj and set its value as object with key firstName and value "John"
 */

let myObj = {firstName: "John"};

/**
 * Level - Easy
 * Set new key/property to myObj object named lastName with value "Dou"
 */

myObj.lastName = "Dou";
console.log(myObj);

/**
 * Level - Easy
 * Set new key/property to myObj object named fullName with value of concatenation of firstName, space, and lastName
 * NOTE: you should use myObj in this task
 */

myObj.fullName = myObj.firstName + " " + myObj.lastName;
console.log(myObj.fullName);

module.exports = {
    myNum, myText, myBool, myNull, myUndefined,
    myArr, myArr1, myArr1_1, myArr2, myArr3, myArr4, fourthElement,
    arrayOperations, myUndefined2, myNum2, myText2, 
    myBool2, myBool3,
    myObj
};
