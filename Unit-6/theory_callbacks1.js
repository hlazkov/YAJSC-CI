const someFunc = () => {
    console.log('This is the text to output');
}

console.log('Start');
setTimeout(someFunc, 1000);
console.log('Finish');

// Start
// Finish
// This is the text to output


console.log('Start');

for (let i = 1; i <= 5; i++) {
    console.log('i at the beginning of the loop ' + i);
    setTimeout (() => {
        console.log('i inside setTimeout ' + i);
    }, 1000);
    console.log('i at the end of the loop ' + i);
}

console.log('Finish');

// similar code that returns the same result, but with callback put in a separate function
const someFunc1 = (i) => {
    console.log('i inside setTimeout ' + i);
}

console.log('Start');

for (let i = 1; i <= 5; i++) {
    console.log('i at the beginning of the loop ' + i);
    setTimeout(() => someFunc1(i), 1000);
    console.log('i at the end of the loop ' + i);
}

console.log('Finish');


// callback hell
const myTimeout1 = () => {
    setTimeout(() => {
        console.log('My timeout - 5 sec');
    }, 5_000);
}

const myTimeout2 = (cb) => {
    setTimeout(() => {
        console.log('My timeout - 10 sec');
        cb();
    }, 10_000);
}

myTimeout2(myTimeout1);
// another option to perform the same execution order
//myTimeout2(() => myTimeout1());