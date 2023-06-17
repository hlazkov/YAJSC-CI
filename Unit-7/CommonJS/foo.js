const fooVariable = 'Hello, world CommonJS!';

function fooFunction() {
    console.log('This is a function from foo.js CommonJS')
}

module.exports = {
    fooVariable, fooFunction
}