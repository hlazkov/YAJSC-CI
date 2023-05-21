/**
 * Additional Reading:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 */

/**
 * Level - Easy
 * Task - 1
 * Create an object 'person' with 'firstName' and 'lastName' properties
 * Object should contain 'getFullName' method that returns full name ('firstName lastName')
 */
const person = {
	firstName: "John",
	lastName: "Doe",
	getFullName: function () {
		return this.firstName + " " + this.lastName
	}
}

/**
 * Level - Easy
 * Task - 2
 * Create a makeRobot which will create a 'robot' object from person object by
 * adding additional property to a 'person'
 * 'robot' should have 'batteryLevel' property (e.g. batteryLevel=3)
 * NOTE: use Object assign method
 */
function makeRobot(person) {
	let robot = Object.assign({}, person);
	robot.batteryLevel = 3;
	//console.log(robot);
	return robot;
}

//makeRobot(person);

/**
 * Level - Easy
 * Task - 3
 * Create a isARobot which will check if an object is a robot
 * by checking if object has property (e.g. makeRobot)
 * try to find more than 1 way to do it
 */

// OPTION 1
function isARobot (obj) {
	console.log(obj);
	return obj.hasOwnProperty('batteryLevel');
// 	if (obj.batteryLevel !== undefined) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// OPTION 2
// see above commented

/**
 * Level - Normal
 * Task - 4
 * Create a task4Func which will
 * get the list of object properties which values are Numbers
 */
function task4Func (obj) {
	let arr = [];
	//console.log(obj);
	for (const property in obj){
		//console.log(typeof obj[property]);
		if (typeof obj[property] === "number") {
			//console.log(true);
			arr.push(property);
			//console.log(arr);
		}
	}
	return arr;
}

//task4Func({a: 1, b: 2});

/**
 * Hardcore tasks from codewars.com:
 *
 * https://www.codewars.com/kata/57d001b405c186ccb6000304
 * https://www.codewars.com/kata/570ef4d6127ad17515000b87
 * https://www.codewars.com/kata/577ff15ad648a14b780000e7
 */

module.exports = {
	person,
	makeRobot,
	isARobot,
	task4Func
};