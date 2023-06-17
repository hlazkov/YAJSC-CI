// while loop

let i = 0;
while (i <= 5) {
    console.log(i);
    i++;
}

console.log('Finish while');


// do ... while

let j = 0;

do {
    console.log(j);
    j++;
} while (j <= 5);

console.log("Finish do .. while");

// do ... while with condition

let condition = true;
let k = 0;

do {
    console.log(k);
    k = k + 1;
    if (k >= 5) condition = false
} while (condition)

console.log("Finish do .. while + condition");


// for loop

for (let l = 0; l <=5; l++) {
    console.log(l);
}

console.log("Finish for loop");


// for .. in & for .. of loop


const arr = [1,2,3,4,5,"some text", true, undefined, {a: 100500}];

for (let m=0; m < arr.length; m++) {
    console.log(arr[m]);
}

console.log("Finish for loop 2")

// for .. of

for (let n of arr) {
    console.log(n)
}

console.log("Finish for .. of loop")


// for .. in loop

const obj1 = {
    0: 1,
    1: 2,
    5: "some text",
    c: true
}

for (let key in obj1) {
    console.log(key);
    console.log(obj1[key]);
    obj1[key] = true;
}

console.log(obj1);

console.log("Finish for .. in loop");