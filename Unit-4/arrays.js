/**
 * Additional Reading:
 *
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

/**
 * Level - Easy
 * Task - 1
 * Create a task1Func which will return second item from an array
 */
let task1Func  = (arr) => {
	//console.log(arr);
	//console.log(arr[2]);
	return arr[2];
}

/**
 * Level - Easy
 * Task - 2
 * Create a task2Func which will add 1 item to a passed array (e.g. "new item")
 */
let task2Func = (arr) => {
	return console.log(arr.push("new item"));
}
//const arr = [1,2,3]
//task2Func(arr);
//console.log(arr);

/**
 * Level - Easy
 * Task - 3
 * Create a task3Func which get 2 arrays
 * and return array containing elements from array1 and array2
 */
let task3Func = (arr1, arr2) => {
	return arr1.concat(arr2);
}

/**
 * Level - Easy
 * Task - 4
 * Create a task4Func which will
 * return new array with specified length and filled in with specified value
 */
let task4Func = (length, value) => {
	const arr = new Array(length);
	//console.log(arr.fill(value));
	return arr.fill(value)
}

//task4Func(5, "a"); // [ 'a', 'a', 'a', 'a', 'a' ]

/**
 * Level - Easy
 * Task - 5
 * Create a task5Func which will get an array of objects
 * e.g. [{name: "Jane Dou", age: 45}, {name: "Peter Parker", age: 18}]
 * and returns a number of people whose name is "Jack" or age is lower than 30
 * don't use any cycles
 */

//ADDED 2ND OPTION WITH FILTER()

let task5Func = (arr) => {
	let newArr = [];
	arr.filter(element => {
		//console.log(element)
		if (element.name.includes("Jack ") || element.age < 30) {
			newArr.push(element);
		}
	});
	//console.log(newArr);
	return newArr.length;
}

// let task5Func = (arr) => {
// 	let newArr = [];
// 	arr.forEach(element => {
// 		//console.log(element)
// 		if (element.name.includes("Jack") || element.age < 30) {
// 			newArr.push(element);
// 		}
// 	});
// 	console.log(newArr);
// 	return newArr.length;
// }

//task5Func([{name: "Jane Dou", age: 45}, {name: "Peter Parker", age: 18}]);

/**
 * Level - Easy
 * Task - 6
 * Create a task6Func which will
 * get an array of objects
 * e.g. [{name: "Jane Dou", age: 45}, {name: "Peter Parker", age: 18}]
 * return new array of all people who are older than 30
 */

// 2ND OPTION WITH FILTER()
let task6Func = (arr) => {
	let newArr = [];
	newArr = arr.filter((element) => element.age > 30);
	//console.log(newArr);
	return newArr;
}

// let task6Func = (arr) => {
// 	let newArr = [];
// 	arr.find((el) => {
// 		//console.log(el);
// 		//console.log(el.age > 30);
// 		if ((el.age > 30) === true) {
// 			newArr.push(el);
// 		}
// 	});
// 	//console.log(newArr);
// 	return newArr;
// }

/**
 * Level - Easy
 * Task - 7
 * Create a task7Func which will
 * get an array of objects
 * e.g. [{name: "Jane", age: 45}, {name: "Peter", age: 18}]
 * return new array of objects containing additional property "maturity"
 * maturity = "baby" if age is 0 or 1,
 * maturity = "toddler" if age 2 to 3
 * maturity = "preschooler" if age is 4 to 5
 * "gradeschooler" if age is 6 to 12
 * "teen" from 13 to 18
 * "young adult" from 19 to 21
 * "adult" from 22 and greater
 */
// 2ND OPTION USING MAP METHOD
let task7Func = (arr) => {
	for (let element=0; element < arr.length; element++) {
		let newArr = [];
		arr.map(element => {
			if (element.age <=1) {
				maturity = "baby";
				element.maturity = maturity;
				newArr.push(element);
			} else if (element.age >=2 && element.age <= 3) {
				maturity = "toddler";
				element.maturity = maturity;
				newArr.push(element);
			} else if (element.age >=4 && element.age <= 5) {
				maturity = "preschooler";
				element.maturity = maturity;
				newArr.push(element);
			} else if (element.age >=6 && element.age <= 12) {
				maturity = "gradeschooler";
				element.maturity = maturity;
				newArr.push(element);
			} else if (element.age >=13 && element.age <= 18) {
				maturity = "teen";
				element.maturity = maturity;
				newArr.push(element);
			} else if (element.age >=19 && element.age <= 21) {
				maturity = "young adult";
				element.maturity = maturity;
				newArr.push(element);
			} else if (element.age >=22) {
				maturity = "adult";
				element.maturity = maturity;
				newArr.push(element);
			}
		})
		//console.log(newArr);
		return newArr;	
	}
}

// let task7Func = (arr) => {
// 	let newArr = new Array;
// 	for (let i=0; i < arr.length; i++) {
// 		let maturity;
// 		let element = arr[i];
// 		if (element.age <=1) {
// 			maturity = "baby";
// 		} else if (element.age >=2 && element.age <= 3) {
// 			maturity = "toddler";
// 		} else if (element.age >=4 && element.age <= 5) {
// 			maturity = "preschooler";
// 		} else if (element.age >=6 && element.age <= 12) {
// 			maturity = "gradeschooler";
// 		} else if (element.age >=13 && element.age <= 18) {
// 			maturity = "teen";
// 		} else if (element.age >=19 && element.age <= 21) {
// 			maturity = "young adult";
// 		} else if (element.age >=22) {
// 			maturity = "adult";
// 		}
// 		newEl = { name: element.name, age: element.age, maturity: maturity };
// 		//console.log(newEl);
// 		newArr.push(newEl);
// 	}
// 	return newArr;
// }

/**
 * Level - Normal
 * Task - 8
 * Create task8Func to find an index of minimal item from an array;
 * @example
 * console.log(minItem([2,5,6,3,1,8])) // 4
 * Note: try different approaches (e.g. using forEach or using Math object and its function)
 */

// 2ND OPTION WITH FOREACH
let task8Func = (arr) => {
	let min = 0;
	arr.forEach(element => {
		if (element < min) {
			min = element;
		}
	})
	return arr.indexOf(min);
}

// let task8Func = (arr) => {
// 	//console.log(arr);
// 	const min = Math.min(...arr);
// 	//console.log(min);
// 	return arr.indexOf(min);
// }

task8Func([2,5,6,3,1,8]);

/**
 * Level - Normal
 * Task - 9
 * Crete task9Func which will return number of valid entries of an array
 * valid means not null/undefined
 */
let task9Func = (arr) => {
	num = 0;
	//console.log(arr);
	for (let i=0; i < arr.length; i++) {
		if (arr[i] !== null && arr[i] !== undefined) {
			num = num + 1;
		}
	}
	//console.log(num);
	return num;
}

/**
 * Level - Normal
 * Task - 10
 * Crete task10Func which will filter out null and undefined entries
 * if number of invalid entries are greater than 3
 * throw an Error "The data needs to be reviewed"
 */

let task10Func = (arr) => {
	let numInv = 0;
	let newArr = [];
	arr.forEach(element => {
		if (element !== null && element !== undefined) {
			newArr.push(element);
		} else {
			numInv = numInv+1;
		}
	});
	if (numInv > 3) {
		throw new Error("The data needs to be reviewed");
	}
	return newArr;
}

/**
 * Hardcore tasks from codewars.com:
 *
 * https://www.codewars.com/kata/57cc975ed542d3148f00015b
 * https://www.codewars.com/kata/5a2be17aee1aaefe2a000151
 * https://www.codewars.com/kata/56576f82ab83ee8268000059
 * https://www.codewars.com/kata/563e320cee5dddcf77000158
 * https://www.codewars.com/kata/5a092d9e46d843b9db000064
 * https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095
 * https://www.codewars.com/kata/57f22b0f1b5432ff09001cab
 * https://www.codewars.com/kata/5b6c220fa0a661fbf200005d
 * https://www.codewars.com/kata/55eeddff3f64c954c2000059
 * https://www.codewars.com/kata/558fc85d8fd1938afb000014
 */

module.exports = {
	task1Func, task2Func, task3Func,
	task4Func, task5Func, task6Func,
	task7Func, task8Func, task9Func,
	task10Func
};