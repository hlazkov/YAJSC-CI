/**
 * Additional Reading:
 *
 * https://uk.javascript.info/callbacks
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing
 * https://www.freecodecamp.org/news/asynchronous-programming-in-javascript/
 */

const someFunc = () => console.log("Callback invoked!");
const someFuncWithParam = (resultOfTheAsyncFunc) => console.log(`Result = ${resultOfTheAsyncFunc}`);

/**
 * Level - Easy
 * Task - 1
 * Create a function addNumbers that takes 
 * two numbers and a callback function as parameters. 
 * Inside the function, calculate the sum of the two numbers. 
 * Once the sum is calculated, invoke the callback function with the resulting sum as an argument.
 * @example
 * usage of the created function should be like:
 *      addNumbers(1, 2, someFuncWithParam)
 * The output of the above code is ===> "Result = 3"
 * 
 * if someFuncWithParam = (resultOfTheAsyncFunc) => console.log(`Result = ${resultOfTheAsyncFunc}`);
 */
// enter your code below

const addNumbers = (num1, num2, someFuncWithParam) => {
    const sum = num1 + num2;
    someFuncWithParam(sum);
}

addNumbers(1, 2, someFuncWithParam);


/**
 * Level - Easy
 * Task - 2
 * Implement a function calculateSum that takes 
 * an array of numbers and a callback function as parameters. 
 * Inside the function, calculate the sum of the numbers in the array. 
 * Once the sum is calculated, invoke the callback function with the resulting sum.
 * @example
 * usage of the created function should be like:
 *      calculateSum([1, 2, 3, 4], someFuncWithParam)
 * The output of the above code is ===> "Result = 10"
 * 
 * if someFuncWithParam = (resultOfTheAsyncFunc) => console.log(`Result = ${resultOfTheAsyncFunc}`);
 */
// enter your code below

const calculateSum = (arr, someFuncWithParam) => {
    let sum = 0;
    arr.forEach(element => {
        //console.log(element);
        sum = sum + element;
        //console.log(sum);
    });
}

calculateSum([1,2,3], someFuncWithParam);


/**
 * Level - Easy+
 * Task - 3
 * Create a function 'countdown' that takes a duration in seconds 
 * and a callback function as parameters. 
 * Inside the function, console.log number that starts from 0
 * and increments by one second until it reaches the specified duration. 
 * After the countdown finishes, return invoke the callback function.
 * @example
 * usage of the created function should be like:
 *      countdown(10, someFunc);
 * The output of the code should be:
 *      0
 *      1
 *      ...
 *      {duration}
 *      Callback invoked!
 * 
 * if someFunc = () => console.log("Callback invoked!");
 */

// I DON'T UNDERSTAND HOW THIS CODE WORKS
const countdown = (duration, callback) => {
    let counter = 0;
    function countdownHelper() {
      console.log(counter);
      counter++;
      if (counter > duration) {
        callback();
      } else {
        setTimeout(countdownHelper, 1000);
      }
    }
    countdownHelper();
  }

  countdown(10, someFunc);



/**
 * Level - Easy
 * Task - 4
 * Create a function delayedGreeting that 
 * takes a name and a callback function as parameters. 
 * Inside the function, use setTimeout to delay the execution 
 * of the callback function by 1 second. 
 * The callback function should be invoked with a greeting message `Hello, ${name}!`.
 * @example
 *      delayedGreeting('Bob', someFuncWithParam);
 * The output of the code should be:
 * ...
 *   nothing happens for 1 seconds
 * ...
 *      Result = Hello, Bob!
 * 
 * if someFuncWithParam = (resultOfTheAsyncFunc) => console.log(`Result = ${resultOfTheAsyncFunc}`);
 */
// enter your code below

const delayedGreeting = (name, callback) => {
    let resultOfTheAsyncFunc = `Hello ${name}`;
    setTimeout(() => callback(resultOfTheAsyncFunc), 1000);
};

delayedGreeting('Alice', someFuncWithParam);


/**
 * Level - Normal
 * Task - 1
 * Create a function greetWithDelay that takes a name, delay in seconds,
 * and a callback function as parameters. 
 * Inside the function, use setTimeout to delay the execution of the callback function by the specified delay. 
 * The callback function should be invoked with the provided name as the first argument 
 * and a greeting message 'Welcome to the callbacks.' as the second argument.
 * @example
 *      greetWithDelay("Alice", 2, someFuncWith2Params);
 * The output of the code should be:
 * ...
 *   nothing happens for 2 seconds
 * ...
 *  In the log you will see:
 *      "Hello, Alice! Welcome to the callbacks."
 * 
 * someFuncWith2Params is defined below
 */
const someFuncWith2Params = (name, message) => {
    console.log("Hello, " + name + "! " + message);
}

// enter your code below
const greetWithDelay = (name, delay, callback) => {
    setTimeout(() => callback(name, message), delay*1000);
}

greetWithDelay("Alice", 2, someFuncWith2Params);


/**
 * Level - Hard
 * Task - 1
 * Create a function 'countdown2' that takes a duration in seconds 
 * and a callback function as parameters. 
 * Inside the function, implement a countdown timer (setTimeout) 
 * that prints left number of seconds to wait and waits 1 second.
 * Should repeat till the specicified duration ends. 
 * After the countdown finishes, invoke the callback function.
 * @example
 *      countdown(10, someFunc);
 * The output of the code should be:
 * ...
 *   prints 10 and waits for 1 sec
 *   prints 9 and waits for 1 sec
 *   ...
 *   prints 0
 *   prints "Callback invoked!"
 * 
 * if someFunc = () => console.log("Callback invoked!");
 */
// enter your code below

const countdown2 = (duration, callback) => {
    
}



module.exports = {
    delayedGreeting,
    countdown,
    countdown2,
    addNumbers,
    calculateSum,
    someFuncWith2Params,
    greetWithDelay
}