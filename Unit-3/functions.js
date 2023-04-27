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

const { should } = require("chai");

/**
 * Level - Easy
 * Task - 1
 * create a function task1Func which will always return true
 * use function definition (also called a function declaration, or function statement)
 */

function task1Func () {
	return true;
}

/**
 * Level - Easy
 * Task - 2
 * create a variable task2Func which will return a function
 * which will take year of birth as a parameter and returns calculated age based on current year
 * use function expression
 */

let task2Func = function(dob_year) {
	let age = (2023 - dob_year);
	return age;
}

task2Func(1989);

/**
 * Level - Easy
 * Task - 3
 * create a variable task3Func which will return a function
 * which will take parameter gender as a number (where 1 stands for woman, 2 is man and 0 is other)
 * and returns text ee.g. "My gender is woman"
 * use function expression with arrow function notation
 */

let task3Func = (g) => {
	let gender = g;
	if (g === 1) {
		gender = "My gender is woman";
		return gender
	} else if (g === 2) {
		gender = "My gender is man";
		return gender
	} else if (g === 0) {
		gender = "My gender is other"
		return gender
	}
}

//console.log(task3Func(1));
//console.log(task3Func(2));
//console.log(task3Func(0));

/**
 * Level - Easy
 * Task - 4
 * Create a function task4Func which will take 2 parameters
 * and calculate sum of those two params
 * NOTE: assume parameters are always numbers
 */

function task4Func (a, b) {
	let sum = a + b;
	return sum;
}

/**
 * Level - Easy
 * Task - 5
 * Create a function task5Func which will do same as the function from Task4
 * just make second parameter to have a default value equal 10
 */

function task5Func (a, b=10) {
	let sum = a + b;
	return sum;
}

/**
 * Level - Easy
 * Task - 6
 * Create a function task6Func which will get an object
 * e.g. {firstName: "Jack", lastName: "London"}
 * and returns a string firstName plus lastName, separated by space
 */

function task6Func (obj) {
	let fullname = obj.firstName + " " + obj.lastName;
	return fullname
}

//task6Func({firstName: "Jack", lastName: "London"});

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

function task7Func (firstName = "", lastName = "", age = 0) {
	let obj = {
		firstName: firstName,
		lastName: lastName,
		age: age
	}
	return obj;
}

/**
 * Level - Easy
 * Task - 8
 * Create a function task8Func which checks if number is odd or even
 * And returns true if odd and false if even
 * Hint: think about a remainder of two numbers
 */

function task8Func (number) {
	let isOdd;
	if (number % 2 != 0) {
		isOdd = true;
		return isOdd;
	} else {
		isOdd = false;
		return isOdd;
	}
}

/**
 * Level - Easy
 * Task - 9
 * Create a function task9Func which returns the first shortest of the words in the given array
 * @example
 * task9Func(["ten", "two", "four"]) // => ten
 */

function task9Func (arr) {
	let shorterst = arr[0];
	//console.log("Initial shortest is element " + arr[0]);
	for (let n of arr) {
		//console.log("n = " + n)
		if (n.length < shorterst.length) {
			//console.log("n.length < shorterst.length : " + n.length + "<" + shorterst.length)
			shorterst = n;
			//console.log("shortest = " + shorterst)
		} else {
			// I don't know what to put in here
			//console.log("n.length >= shorterst.length : " + n.length + ">=" + shorterst.length)
		}
	}
	//console.log("final shortest = " + shorterst)
	return shorterst;
}

task9Func(["ten", "two", "four", "x"]);

/**
 * Level - Easy
 * Task - 10
 * Create a function task10Func which calculates total distance traveled
 * based on an array of objects with field distance and direction
 * e.g [{direction: "Kiyv - Krakow", distance: 879}, {direction: "Kiyv - Tokyo", distance: 8193}]
 */

let task10Func;

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

let task11Func;

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

let task12Func;

/**
 * Level - Normal
 * Task - 13
 * Create a function task13Func which returns word google with given numbers of "o" symbols
 * @example
 * task13Func(5) // => gooooogle
 */

let task13Func;

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
		// enter your code here
	},
	call() {
		// enter your code here
	}

};

/**
 * Level - Hardcore
 * Task - 15
 * Create a function task15Func which will calculate a Final Price
 * considering the Price and the Discount Percentage
 * hint: you need to use the Closure here
 * JS Closures: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
 * @example
 * const discount10 = discountFunction(10);
 * console.log(discount10(90)); // 81
 * console.log(discount10(100)); // 90
 */

function task15Func(discountPercentage) {
	return function (amount) {
		// enter your code here
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