const myArr = [1, 2, 4, true, 'some text'];

// join
console.log(myArr.join('')); //124truesome text

// push - mutates original array, returns mutated array and new array length
// several new elements can be passed in params
console.log(myArr.push(false));
console.log(myArr); //[ 1, 2, 4, true, 'some text', false ]

// pop - removes last array element and returns this element
console.log(myArr.pop());
console.log(myArr); //[ 1, 2, 4, true, 'some text' ]

// fill - replaces array elements with new value and mutates original array.
// returns mutated array
console.log(myArr.fill('bla'));
console.log(myArr); //[ 'bla', 'bla', 'bla', 'bla', 'bla' ]

// reverse
const str = '123 abc'
console.log(str.split('').reverse().join('')); //cba 321

// includes
console.log(myArr); //[ 'bla', 'bla', 'bla', 'bla', 'bla' ]
console.log(myArr.includes('bla')); //true

// indexOf
console.log(myArr.indexOf('bla')); //true

// find - receives cb function as atgument
// finds element and returns it
const myArr1 = [{a: 1}, {a: 2}, {a: 3}];

console.log(myArr1.find((el, ind) => {
    console.log(ind)
    return el.a === 2;
}));                                //{ a: 2 }

// forEach - returns undefined
console.log(myArr1.forEach((el, ind) => {
    console.log(ind);
    console.log(el);
}));

console.log(myArr1.forEach(el => {console.log(el)}));

// map - returns new array, can mutate original array
console.log(myArr1.map(el => {
    console.log(el);
    el.a = el.a + 10;
    return el.a + 2;
}));
/* { a: 1 }
{ a: 2 }
{ a: 3 }
[ 3, 4, 5 ] */
console.log(myArr1);

// filter - returns all elements that satisfy the condition
const myArr2 = [{a: 1, b: 1}, {a: 2}, {a: 3}, {a:1, b:2}];

console.log(myArr2.filter(el => {
    return el.a === 1;
}));                                //[ { a: 1, b: 1 }, { a: 1, b: 2 } ]

// sort - mutates original array
const mySortFunc = (a, b) => a.a - b.a;
console.log(myArr2.sort(mySortFunc)); //[ { a: 1, b: 1 }, { a: 1, b: 2 }, { a: 2 }, { a: 3 } ]
console.log(myArr2); [ { a: 1, b: 1 }, { a: 1, b: 2 }, { a: 2 }, { a: 3 } ]