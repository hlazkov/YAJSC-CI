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
	return arr[2];
}

/**
 * Level - Easy
 * Task - 2
 * Create a task2Func which will add 1 item to a passed array (e.g. "new item")
 */
let task2Func = (arr) => {
	arr.push("new item");
}

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
	return new Array(length).fill(value);
}

/**
 * Level - Easy
 * Task - 5
 * Create a task5Func which will get an array of objects
 * e.g. [{name: "Jane Dou", age: 45}, {name: "Peter Parker", age: 18}]
 * and returns a number of people whose name is "Jack" or age is lower than 30
 * don't use any cycles
 */
let task5Func = (arr) => {
	let res = 0;
	arr.forEach(el => {
		if(el.name === "Jack") {
			res += 1;
		} else if (el.age < 30) {
			res += 1;
		}
	});
	return res;
}

/**
 * Level - Easy
 * Task - 6
 * Create a task6Func which will
 * get an array of objects
 * e.g. [{name: "Jane Dou", age: 45}, {name: "Peter Parker", age: 18}]
 * return new array of all people who are older than 30
 */
let task6Func = (arr) => {
	return arr.filter(el => el.age > 30);
}

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
let task7Func = (arr) => {
	return arr.map(el => {
		let maturity;
		if (el.age <= 1) {
			maturity = "baby";
		} else if (el.age <= 3) {
			maturity = "toddler";
		} else if (el.age <= 5) {
			maturity = "preschooler";
		} else if (el.age <= 12) {
			maturity = "gradeschooler";
		} else if (el.age <= 18) {
			maturity = "teen";
		} else if (el.age <= 21) {
			maturity = "young adult";
		} else {
			maturity = "adult";
		}
		return {...el, maturity};
	});
}

/**
 * Level - Normal
 * Task - 8
 * Create task8Func to find an index of minimal item from an array;
 * @example
 * console.log(minItem([2,5,6,3,1,8])) // 4
 * Note: try different approaches (e.g. using forEach or using Math object and its function)
 */
let task8Func = (arr) => {
	return arr.indexOf(Math.min(...arr));
}

/**
 * Level - Normal
 * Task - 9
 * Crete task9Func which will return number of valid entries of an array
 * valid means not null/undefined
 */
let task9Func = (arr) => {
	return arr.filter(el => el !== null && el !== undefined).length;
}

/**
 * Level - Normal
 * Task - 10
 * Crete task10Func which will filter out null and undefined entries
 * if number of invalid entries are greater than 3
 * throw an Error "The data needs to be reviewed"
 */

let task10Func = (arr) => {
	let invalid = 0;
	return arr.filter(el => {
		if (el === null || el === undefined) {
			invalid += 1;
			if (invalid > 3) {throw 'The data needs to be reviewed'}
		}
		return el !== null && el !== undefined;
	});
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