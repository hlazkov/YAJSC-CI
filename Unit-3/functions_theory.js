function myFunc1 () {
    console.log('Hello world');
    return 4;
    console.log('Ooops'); //this code does not execute because function stops at return
}

myFunc1();

let a = myFunc1;

console.log(a);
//[Function: myFunc1]

console.log(a());

myFunc1();
// only prints Hello world but does not print 4 into console

const b = myFunc1();

console.log(b + 1);
/* Hello world
5
*/


function myFunc2 (a,b) {
    console.log("Arguments:" + a + " and " + b);
    if (a > 0) {
        return a+b;
    }
    console.log("Ooops");
}

console.log(myFunc2(1,2));
/* Arguments:1 and 2
3
*/

console.log(myFunc2(-1,2));

// if function gets < or > arguments than in function declaration - it's fine in JS. 
// Extra or missing args are ignored.

// optional params with specified default value:
function myFunc2 (a,b,c=10) {
    console.log("Arguments:" + a + " and " + b + " and " + c);
    if (a > 0) {
        return a+b+c;
    }
    console.log("Ooops");
}

console.log(myFunc2(1,2));

/* Arguments:1 and 2 and 10
13
*/

function myFunc2 (a,b,c) {
    console.log("Arguments:" + a + " and " + b + " and " + c);
    if (c === undefined) {
        c=10;
    }
    return a+b+c;
    console.log("Ooops");
}

console.log(myFunc2(1,2));

// scopes of visibility
const aa = 100500;

function myFunc3 (aa, b, c=10) {
    console.log("Inside aa = " + aa);
    console.log("Inside b = " + b);
    console.log("Inside c = " + c);
}

console.log("Outside aa = " + aa);

myFunc3(1,2);


// function declaration
function myFunc4(a, b, c = 10) {
    return a + b + c;
}

// function expression
const x = function(a, b, c = 10) {
    return a + b + c;
}

// arrow function
let y = (a, b, c = 10) => {
    return a + b + c;
}

// {} and "return" can be ommited in arrow functions:
y = (a, b, c = 10) => a + b + c;


// callback

function myFunc5 (a, b, cb) {
    ///
    ///
    return cb (a, b) + 10;
}

const myFunc6 = (p1, p2) => {
    return p1 + p2
}

console.log(myFunc5(10, 5, myFunc6));

// example of a callback
function map(f, a) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
      result[i] = f(a[i]);
    }
    return result;
  }
  
  const cube = function (x) {
    return x * x * x;
  };
  
  const numbers = [0, 1, 2, 5, 10];
  console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]

  // example of a recusion

function loop(x) {
// "x >= 10" is the exit condition (equivalent to "!(x < 10)")
if (x >= 10) {
    return;
}
// do stuff
loop(x + 1); // the recursive call
}
loop(0);
 
  
// Closures
// The following example shows nested functions:
// Since the inner function forms a closure, you can call the outer function 
// and specify arguments for both the outer and inner function:

function addSquares(a, b) {
function square(x) {
    return x * x;
}
return square(a) + square(b);
}

console.log(addSquares(2, 3)); // 13
console.log(addSquares(3, 4)); // 25
console.log(addSquares(4, 5)); // 41


