const {
	promise1,
	promise2
} = require("./utils/utilPromises");

/**
 * Additional Reading:
 *
 * https://learn.javascript.ru/promise-basics
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 */

/**
 * Level - Easy
 * Task - 1
 * Create a promiseResolve function which will return promise resolved with string value "Resolved!"
 */

function promiseResolve() {
	return new Promise(resolve => {
		resolve('Resolved!')
		});
	}

// enter your code here
/**
 * Level - Easy
 * Task - 2
 * Create a promiseReject function which will return promise rejected with string value "Rejected!"
 */

function promiseReject () {
	return new Promise((resolve, reject) => {
		reject('Rejected!');
	})
}

/**
 * Level - Easy
 * Task - 3
 * Create a function which returns a promise with both resolve and reject states
 * Should resolve when param === true with "Resolved!" string
 * Should reject when param === false with "Rejected!" string
 */

function fullPromise(param) {
	return new Promise((resolve, reject) => {
		if (param) {
			resolve('Resolved!');
		} else {
			reject('Rejected!');
		}
	})
}

/**
 * Level - Easy
 * Task - 4
 * Create task4Func which will call promise1 function (it's already imported from /utils/utilPromises)
 * and add string ' was resolved successfully' to the result
 * @example
 * if promise1() returns string 'Promise1'
 * so final result should look 'Promise1 was resolved successfully'
 * NOTE: Use `then` functions
 */

function task4Func() {
	return promise1()
		.then(res => {
			console.log(res);
			const result = res + " was resolved successfully";
			return result;
		})
	
}

console.log(task4Func());


/**
 * Level - Normal
 * Task - 5
 * Create task5Func which will chain two promises (promise1() and promise2() from /utils/utilPromises)
 * and return result as a concatenation of results for those 2 promises in a below format
 * `${promise1Result} and ${promise2Result} - successfully resolved`
 * NOTE: Use `then` functions
 */

function task5Func() {
	return promise1()
		.then(result1 => {
			return promise2()
			.then(result2 => {
				const finalResult = `${result1} and ${result2} - successfully resolved`;
				return finalResult;
		})
	})
}

//task5Func();

/**
 * Level - Normal
 * Task - 6
 * Create task6Func which will return an array of results of promise1() and promise2()
 * As you already may notice promise1 take 10 seconds to become resolved
 * while promise2 take about 20 seconds
 * You should not only return results of both promises as an array but make it in 20 second
 * task6Func() -> ["Promise1", "Promise2"]
 */

// THIS CODE TAKES 30 SEC
// function task6Func() {
// 	return promise1()
// 	.then(res => {
// 		let arr = new Array;
// 		const result1 = res;
// 		arr.push(result1);
// 		return promise2()
// 		.then(res => {
// 			const result2 = res;
// 			arr.push(result2)
// 			return arr;
// 	})
// })
// }

//THIS CODE TAKES 20 SEC
function task6Func() {
	const res = Promise.all([promise1(), promise2()]);
	let arr = new Array;
	arr = res;
	return arr;

}

task6Func();

/**
 * Hardcore tasks from codewars.com:
 *
 * https://www.codewars.com/kata/5b61d6ef07a266d40b000097
 * https://www.codewars.com/kata/58d014421c694f71630000bc
 * https://www.codewars.com/kata/587593285448632b8d000143
 * https://www.codewars.com/kata/5a353a478f27f244a1000076
 *
 * Additional Tasks to Master Promises:
 * https://github.com/lighthouse-labs/promises-exercises
 */

module.exports = {
	promiseResolve,
	promiseReject,
	fullPromise,
	task4Func,
	task5Func,
	task6Func
};