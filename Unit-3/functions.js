/**
 * Additional Reading:
 *
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Functions
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 * https://developer.mozilla.org/ru/docs/Glossary/Callback_function
 * https://learn.javascript.ru/callbacks
 */

/**
 * Level - Easy
 * Task - 1
 * create a function task1Func which will always return true
 * use function definition (also called a function declaration, or function statement)
 */

function task1Func() {
	return true;
}

/**
 * Level - Easy
 * Task - 2
 * create a variable task2Func which will return a function
 * which will take year of birth as a parameter and returns calculated age assuming current year is 2022
 * use function expression
 */

let task2Func = function(birth) { return 2022 - birth; }

/**
 * Level - Easy
 * Task - 3
 * create a variable task3Func which will return a function
 * which will take parameter gender as a number (where 1 stands for woman, 2 is man and 0 is other)
 * and returns text ee.g. "My gender is woman"
 * use function expression with arrow function notation
 */

let task3Func = (gender) => { return `My gender is ${gender ? (gender === 1 ? 'woman' : 'man') : 'other'}`; }

/**
 * Level - Easy
 * Task - 4
 * Create a function task4Func which will take 2 parameters
 * and calculate sum of those two params
 * NOTE: assume parameters are always numbers
 */
let task4Func = (a, b) => a+b;

/**
 * Level - Easy
 * Task - 5
 * Create a function task5Func which will do same as the function from Task4
 * just make second parameter to have a default value equal 10
 */
let task5Func = (a, b=10) => a+b;

/**
 * Level - Easy
 * Task - 6
 * Create a function task6Func which will get an object
 * e.g. {firstName: "Jack", lastName: "London"}
 * and returns a string firstName and lastName separated by space
 */
function task6Func(object) {
	return object.firstName + " " + object.lastName;
}

/**
 * Level - Easy
 * Task - 7
 * Create a function task7Func that returns an object based on the given information
 * (params may be null, please use default ones (empty strings and 0 for age))
 * @example
 * task7Func("Jack", "London", 52) should return
 * {
 *    firstName: "Jack"
 *    lastName: "London"
 *    age: 52
 * }
 */
function task7Func(firstName = "", lastName = "", age = 0) {
	return {
		firstName: firstName,
		lastName: lastName,
		age: age,
	}
}

/**
 * Level - Easy
 * Task - 8
 * Create a function task8Func which checks if number is odd or even
 * And returns true if odd and false if even
 * Hint: think about a remainder of two numbers
 */
function task8Func(n) {
	return !n%2;
}

/**
 * Level - Easy
 * Task - 9
 * Create a function task9Func which returns shortest of the words in the given array
 * @example
 * task9Func(["ten", "two", "four"]) // => ten
 */
function task9Func(wordArray) {
	let smallestNumber = 100;
	let res;
	for (let i of wordArray) {
		if(i.length < smallestNumber) {
			res = i;
			smallestNumber = i.length;
		}
	}
	return res;
}

/**
 * Level - Easy
 * Task - 10
 * Create a function task10Func which calculates total distance traveled
 * based on an array of objects with field distance and direction
 * e.g [{direction: "Kiyv - Krakow", distance: 879}, {direction: "Kiyv - Tokyo", distance: 8193}]
 */

function task10Func(paths) {
	let res=0;
	for (let i in paths) {
		res += paths[i].distance;
	}
	return res;
}

/**
 * Level - Easy
 * Task - 11
 * Callback
 * Create a function task11Func which will take another function
 * and returns result of execution of that another function in string format
 * @example
 * if callBackFunction returns "THIS IS THE RESULT"
 * than task11Func should return "Callback result = THIS IS THE RESULT"
 */

function task11Func (cb) {
	return `Callback result = ${cb()}`;
}

/**
 * Level - Normal
 * Task - 12
 * Rest parameter
 * Create a function task12Func which returns an object
 * containing number of parameters passed in function and first parameter value
 * @example
 * {
 *     paramsNumber: 3,
 *     firstParam: _first_param_value_,
 * }
 * Note: use rest parameter and use it to get first param value
 */

function task12Func(...rest) {
	return {
		paramsNumber: rest.length,
		firstParam: rest[0]
	};
}

/**
 * Level - Normal
 * Task - 13
 * Create a function task13Func which returns word google with given numbers of "o" symbols
 * @example
 * task13Func(5) // => gooooogle
 */
function task13Func(n) {
	let letter = "o";
	return ("g" + letter.repeat(n) + "gle");
}

/**
 * Level - Hardcore
 * Task - 14
 * Implement the methods inside the given object which:
 * 1. keys() - console logs keys of the given object (please use for..in cycle)
 * 2. call() - returns the string 'My name is Jack London, and I am 25 years old. My best friend is a wolf'
 * The string should be constructed using the properties from the object
 */

const task14Object = {
	name: 'John',
	lastName: 'Doe',
	age: 25,
	friend: 'wolf',
	keys() {
		//write your code here
		for(const key in task14Object) {
			console.log(key);
		}
	},
	call() {
		//write your code here
		return "My name is "+ task14Object.name +" "+ task14Object.lastName +" and I am "+ task14Object.age +" years old. My best friend is "+ task14Object.friend;
	}

};

/**
 * Level - Hardcore
 * Task - 15
 * Create a function task15Func which will calculate a Final Price
 * considering the Price and the Discount Percentage
 * hint: you need to use the Closure here
 * JS Closures: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
 * @param {percentage} num
 * @param {amount} num
 * @example
 * const discount10 = discountFunction(10);
 * console.log(discount10(90)); // 81
 * console.log(discount10(100)); // 90
 */

// function task14Func(discountPercentage) {
// 	return function (amount) {
//
// 	};
// }

function task15Func(percentage) {
	return function (price) {
		return price - price*(percentage/100);
	};
}

/**
 * Hardcore tasks from codewars.com:
 *
 * https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
 * https://www.codewars.com/kata/5b752a42b11814b09c00005d
 * the last one requires recursion check below for help
 * https://learn.javascript.ru/recursion
 * https://www.programiz.com/javascript/recursion
 */

module.exports = {
	task1Func, task2Func, task3Func,
	task4Func, task5Func, task6Func,
	task7Func, task8Func, task9Func,
	task10Func, task11Func, task12Func,
	task13Func, task14Object, task15Func
};