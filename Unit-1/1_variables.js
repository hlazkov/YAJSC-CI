/**
 * Additional Reading:
 *
 * https://uk.javascript.info/variables
 * https://uk.javascript.info/types
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array
 * https://uk.javascript.info/operators
 * https://uk.javascript.info/type-conversions
 * https://habr.com/ru/company/ruvds/blog/347866/
 */

/**
 * Level - Easy
 * Create "var" variable named myNum and set its value equal to 74
 */

var myNum;
    myNum= 74;

/**
 * Level - Easy
 * Create "let" variable named myText and set its value equal to "Jack"
 */

let myText;
    myText = 'Jack';

/**
 * Level - Easy
 * Create "const" variable named myBool and set its value equal to false
 */

const myBool;
      myBool = false;

///
/// ----- Starting from here I'd recommend to use let (or const if applicable) variables
///

/**
 * Level - Easy
 * Create variable named myNull and set its value equal to null
 */

let myNull = null;

/**
 * Level - Easy
 * Create variable named myUndefined and set its value equal to undefined
 */

var myUnderfined;

/**
 * Level - Easy
 * Create variable named myArr and set its value to be an array of numbers from 2 to 7
 */

var myArr = (2,7);

/**
 * Level - Easy
 * Create variable named myArr1 and set its value to be an empty array
 */

var myArr1 = [];

/**
 * Level - Normal
 * Create variable named myArr1_1 and set its value to be an empty array
 * make first array element to be equal to 'I am the first'
 */

var myArr1_1 = [];
myArr1_1[0] = 'I am the first';

/**
 * Level - Normal
 * Create variable named myArr2 and set its value to be an empty array using Array constructor
 * NOTE: use `new Array` syntax
 */

let myArr2;
myArr2 = new Array();



/**
 * Level - Normal
 * Create variable named myArr3 and set its value to be an array of length 3 and have empty elements
 * use Array constructor
 * NOTE: use `new Array` syntax
 */

let myArr3;
myArr3 = new Array(3);

/**
 * Level - Normal
 * Create variable named myArr4 and set its value to be an array of length 4 and have next elements:
 * first element = 10
 * second element = null
 * third element = "I'm the third one"
 * fours element = false
 * use Array constructor
 * NOTE: use `new Array` syntax
 */


let myArr4;
myArr4 = new Array(4);
new Array(10)
new Array(null)
new Array("I'm the third one")
new Array(false)



/**
 * Level - Easy
 * Create variable named fourthElement and set its value to be myArr 4th element
 * NOTE: you should use myArr variable here
 */

let fourthElement;
fourthElement = myArr4[4];
/**
 * Level - Easy
 * Create variable named arrayOperations and set its value to be myArr 4th element minus myArr 3d element
 * NOTE: you should use myArr variable here
 */

let arrayOperations =myArr4[4]-myArr4[3];

/**
 * Level - Easy
 * Create variable named myNum2 and set its value equal myNum divided by 2
 * NOTE: you should use myNum variable here
 */

let myNum2 =myNum/2;
/**
 * Level - Easy
 * Create variable named myText2 and set its value to be myText, then goes space and word is, then space and myNum2
 * NOTE: Use myText and myNum2 variables to solve it. Result should be something like "George is 21"
 */

let myText2 = myText +'is' + myNum2;

/**
 * Level - Normal
 * Create variable named myBool2 and set its value to be equality comparison (not strict) of myNum and myNum2 variables
 */

let myBool2 = myNum==myNum2;

/**
 * Level - Normal
 * Create variable named myBool3 and set its value to be strict equality comparison of myNum2 variable and "37"
 * NOTE: string should be used
 */

let myBool13 = myNum2==="37";

/**
 * Create variable named myUndefined2 and set its value equal to undefined without "undefined" word usage
 */

let myUnderfined2 = "";

/**
 * Level - Easy
 * Create variable named myObj and set its value as object with key firstName and value "John"
 */

let myObj ={
    firstname:"John"
}



/**
 * Level - Easy
 * Set new key/property to myObj object named lastName with value "Dou"
 */

myObj.lastName = 'Dou';

/**
 * Level - Easy
 * Set new key/property to myObj object named fullName with value of concatenation of firstName, space, and lastName
 * NOTE: you should use myObj in this task
 */

myObj.fullName = firstname + " " + lastname;

let myNum, myText, myBool,  myUndefined,
myArr, myArr1, myArr1_1, myArr2, myArr3, myArr4, fourthElement,
arrayOperations, myUndefined2, myNum2, myText2,
myBool2, myBool3,
myObj;

module.exports = {
    myNum, myText, myBool,  myUndefined,
    myArr, myArr1, myArr1_1, myArr2, myArr3, myArr4, fourthElement,
    arrayOperations, myUndefined2, myNum2, myText2,
    myBool2, myBool3,
    myObj
};

if (height <120) {
    console.log('Forbidden');
}   else {
        console.log('Permitted');
    }


let human = {

    name: 'Jack',
    age: 32,
    married:true,
    child:{name:'Kate', age:6}

}
if(height<120) {
    console.log('He is allowed to proceed');
}
switch(fruit) {
    case "apple":
        console.log("this s apple");
        break;
        case "apricot":
            console.log ("This is apricot");
            break;
            case "banana":
                console.log ("this is banana");
                break;
                default:
                    
}