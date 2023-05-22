/**
 * Additional Reading:
 *
 * https://learn.javascript.ru/classes
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 * https://javascript.info/class
 * https://javascript.info/class-inheritance
 */

/**
 * Level - Easy
 * Task - 1 - Part 1 (verification will work only once Part 2 is implemented)
 * Implement class Figure with:
 * 1) properties name and numberOfPoints
 * 2) constructor should get numberOfPoints and name
 * 3) method getDescription - 'This is a ${name} with ${numberOfPoints} points'
 */
class Figure {
    name;
    numberOfPoints;
    constructor (figureName, numberOfPoints) {
        this.name = figureName;
        this.numberOfPoints = numberOfPoints;
    }
    getDescription () {
        return `This is a ${this.name} with ${this.numberOfPoints} points`
    }
}

/**
 * Level - Easy
 * Task - 1 - Part 2
 * Create an instance of a class Figure
 */
const figure = new Figure('triangle', 3);
console.log(figure);
console.log(figure.getDescription());

/**
 * Level - Easy
 * Task - 2 - Part 1 (verification will work only once Part 2 is implemented)
 * Implement class Square that extends Figure with:
 * 1) property sideLength and figureArea
 * 2) constructor should additionally get sideLength and calculate figureArea
 * 3) getter method getArea that returns property figureArea
 */
class Square extends Figure {
    sideLength;
    figureArea;
    constructor(sideLength) {
        super ('square', 4);
        const figureArea = sideLength * sideLength;
    }
    get getArea() {
        return this.figureArea;
    }
}

/**
 * Level - Easy
 * Task - 2 - Part 2
 * Create an instance of a class Square
 */
let square = new Square(5);
console.log(square);

/**
 * Additional tasks from codewars.com:
 *
 * https://www.codewars.com/kata/597c684822bc9388f600010f
 * https://www.codewars.com/kata/547274e24481cfc469000416
 * https://www.codewars.com/kata/55a14aa4817efe41c20000bc
 * https://www.codewars.com/kata/53f0f358b9cb376eca001079
 * https://www.codewars.com/kata/56f935002e6c0d55fa000d92
 * https://www.codewars.com/kata/577bd8d4ae2807c64b00045b
 */

module.exports = {
    figure,
    square
};