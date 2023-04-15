/* if else condition
example */

const myAge = 31;

if (myAge <= 30) {
    console.log("I'm less than 30");
} else if (myAge < 60) {
    console.log("I'm over 30 and under 60");
} else {
    console.log("I'm over 60")
}

console.log("Finish");

// switch case example

const fruit = "pineaaple";

switch (fruit) {
    case "apple":
        console.log("Basket 1");
        //break;
    case "banana":
        console.log("Basket 2");
        //break;
    case "cherry":
        console.log("Basket 3")
        //break;
    default:
        console.log("Default")
        break;
}