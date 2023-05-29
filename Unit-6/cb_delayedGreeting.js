const someFuncWithParam = (resultOfTheAsyncFunc) => {
    console.log(`Result = ${resultOfTheAsyncFunc}`);
}

const delayedGreeting = (name, callback) => {
    let resultOfTheAsyncFunc = `Hello, ${name}!`;
    console.log('test0');
    setTimeout(() => {
        console.log('test1');
        callback(resultOfTheAsyncFunc);
        console.log('test2');
        console.log('test3');
        console.log('test4');

    }, 10000);
};

delayedGreeting('Alice', someFuncWithParam);
console.log('test5');
// node ./Unit-6/cb_delayedGreeting.js