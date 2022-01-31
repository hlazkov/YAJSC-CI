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

const promiseResolve = () => new Promise(res => res('Resolved!'));

/**
 * Level - Easy
 * Task - 2
 * Create a promiseReject function which will return promise rejected with string value "Rejected!"
 */

const promiseReject = () => new Promise((_, rej) => rej('Rejected!'));

/**
 * Level - Easy
 * Task - 3
 * Create a function which returns a promise with both resolve and reject states
 * Should resolve when param === true with "Resolved!" string
 * Should reject when param === false with "Rejected!" string
 */

function fullPromise(param) {
	return new Promise((res, rej) => param ? res('Resolved!') : rej('Rejected!'));
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
let task4Func = () => promise1()
	.then(res => res + ' was resolved successfully');

/**
 * Level - Normal
 * Task - 5
 * Create task5Func which will chain two promises (promise1() and promise2() from /utils/utilPromises)
 * and return result as a concatenation of results for those 2 promises in a below format
 * `${promise1Result} and ${promise2Result} - successfully resolved`
 * NOTE: Use `then` functions
 */
let task5Func = () => {
	return promise1()
		.then(res => promise2()
			.then(res2 => `${res} and ${res2} - successfully resolved`))
}


/**
 * Level - Normal
 * Task - 6
 * Create task6Func which will return an array of results of promise1() and promise2()
 * As you already may notice promise1 take 10 seconds to become resolved
 * while promise2 take about 20 seconds
 * You should not only return results of both promises as an array but make it in 20 second
 * task6Func() -> ["Promise1", "Promise2"]
 */

async function task6Func() {
	return Promise.all([promise1(), promise2()])
}

module.exports = {
	promiseResolve,
	promiseReject,
	fullPromise,
	task4Func,
	task5Func,
	task6Func
};