const {
  promiseResolve,
  promiseReject
} = require('./promises');
const {promise2, promise1} = require("./utils/utilPromises");

/**
 * Additional Reading:
 *
 * https://javascript.info/async-await
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 */

/**
 * Level - Easy
 * Task - 1
 * Create an asyncPromiseResolve function which will
 * resolve the created earlier promiseResolve() promise
 * using async/await syntax inside the asyncPromiseResolve function 
 * and modify the message result
 * @example
 * if promiseResolve() return "Blabla"
 * than function should return "Blabla was resolved with async await!"
 */
async function asyncPromiseResolve() {
  return `${await promiseResolve()} was resolved with async await!`;
}

/**
 * Level - Easy
 * Task - 2
 * Create an asyncPromiseAll function which will
 * return the result as an array of results of 2 promises:
 * promise1 and promise2 from the './utils/utilPromises' file
 * using async/await syntax
 * asyncPromiseAll() -> ["Promise1", "Promise2"]
 */
async function asyncPromiseAll() {
  return [await promise1(), await promise2()];
}

/**
 * Level - Normal
 * Task - 3
 * Create an asyncPromiseReject function which will
 * handle the created earlier promiseReject() promise
 * using async/await syntax inside the asyncPromiseReject function
 * and return result a string containing promiseReject() rejection reason
 * @example
 * if promiseResolve() rejection reason was "BlablaRejected"
 * than function should catch an error and return "BlablaRejected was handled and result returned"
 */
async function asyncPromiseReject() {
  try{
    await promiseReject();
  } catch (e) {
    return (e + " was handled and result returned");
  }
}

module.exports = {
  asyncPromiseResolve,
  asyncPromiseReject,
  asyncPromiseAll
};