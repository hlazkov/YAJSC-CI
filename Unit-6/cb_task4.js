const someFuncWithParam = (resultOfTheAsyncFunc) => console.log(`Result = ${resultOfTheAsyncFunc}`);

const delayedGreeting = (name, callback) => {
    let resultOfTheAsyncFunc = `Hello ${name}`;
    setTimeout(() => callback(resultOfTheAsyncFunc), 1000);
};

delayedGreeting('Alice', someFuncWithParam);

// node ./Unit-6/cb_task4.js