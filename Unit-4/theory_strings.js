const str = "abcd test cd";
const str2 = "test"

// includes
console.log(str.includes(str2)); // true
console.log(str.includes(str2, 7)); // false

// match
console.log(str.match(/cd/g)); // [ 'cd', 'cd' ] - search using RegExp, globally

// search & RegExp
console.log(str.search(/cd/g)); // 2
reg = new RegExp('cd', 'g');

// trim
const greeting = "   Hello world   ";
console.log("-" + greeting.trim() + "-"); //-Hello world-

// toUpperCase
console.log(greeting.toUpperCase()); //   HELLO WORLD   `

// several methods applied at once
console.log(greeting.toUpperCase().trim().concat('jfhfhgfhgf')); // HELLO WORLDjfhfhgfhgf

// replace
console.log(str.replace('cd', 1111)); // ab1111 test cd
console.log(str.replace(reg, 1111)); // ab1111 test 1111
console.log(str.replaceAll('cd', 1111)); // ab1111 test 1111

// slice
const name1 = "Daria Morgun";
console.log(name1.slice(1)); //aria Morgun
console.log(name1.slice(1, 5)); //aria
console.log(name1.slice(1, -1)); //aria Morgu
console.log(name1.slice(-1, -5)); //aria Morgu
console.log(name1.slice(-5, -2)); //org

// split
console.log(name1.split(''));
/* [
  'D', 'a', 'r', 'i',
  'a', ' ', 'M', 'o',
  'r', 'g', 'u', 'n'
] */
console.log(name1.split(' ')); //[ 'Daria', 'Morgun' ]

// join
console.log(name1.split(' ').join('---')); //Daria---Morgun