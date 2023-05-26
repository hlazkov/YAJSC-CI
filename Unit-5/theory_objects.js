const propertyName = 'abc 123'

const a = {
    prop1: 123,
    prop2: true,
    prop3: {
        innerProp: 321,
        innerProp1: {
            b: "blabla"
        }
    },
    'prop 4': true,
    [propertyName]: true
}

console.log(a[propertyName]); // true 

console.log(a.prop1); //123

const b = {
    a: a
}

console.log(b.a); 
// {
//     prop1: 123,
//     prop2: true,
//     prop3: { innerProp: 321, innerProp1: { b: 'blabla' } }
//   }

b.a.prop1 = 'jhkjhjkhjh';

console.log(b.a === a); // true
console.log(b.a.prop1); // jhkjhjkhjh
console.log(a.prop1); // jhkjhjkhjh
console.log(a["prop 4"]); // true

console.log(a[propertyName]); // true
b['some bla text'] = 'test';
console.log(b['some bla text']); // test

// function can be a property of an obj
const c = {
    prop1: "abc",
    someFunc: function () {
        console.log(this.prop1)
    }
}

c.someFunc(); // abc

console.log(c.hasOwnProperty('prop1')); // true
console.log(propertyName in a); // true