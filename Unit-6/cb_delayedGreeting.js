const someFuncWithParam = (resultOfTheAsyncFunc) => {
    console.log(`Result = ${resultOfTheAsyncFunc}`);
}

const delayedGreeting = (name, callback) => {
    let resultOfTheAsyncFunc = `Hello, ${name}!`;
    console.log('test0');
    setTimeout(() => {
        console.log('test2');
        callback(resultOfTheAsyncFunc);
        console.log('test3');
        console.log('test4');
        console.log('test5');

    }, 10000);
};

delayedGreeting('Alice', someFuncWithParam);
console.log('test1');
// node ./Unit-6/cb_delayedGreeting.js