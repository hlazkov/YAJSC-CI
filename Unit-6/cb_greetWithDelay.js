const someFuncWith2Params = (name, message) => {
    console.log("Hello, " + name + "! " + message);
}

// enter your code below
const greetWithDelay = (name, delay, callback) => {
    const message = "Welcome to the session.";
    setTimeout(() => callback(name, message), delay*1000);
}

greetWithDelay("Alice", 2, someFuncWith2Params);

// * The output of the code should be:
// * ...
// *   nothing happens for 2 seconds
// * ...
// *  In the log you will see:
// *      "Hello, Alice! Welcome to the callbacks."

// // node ./Unit-6/cb_greetWithDelay.js