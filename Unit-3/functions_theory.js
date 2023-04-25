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