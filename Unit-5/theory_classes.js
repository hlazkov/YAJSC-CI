class Animal {
    #age;
    #type;
    constructor (animalAge, animalType) {
        this.#age = animalAge;
        this.#type = animalType;

    }
    get age() {
        return this.#age
    }
    set age(num) {
        return this.#age = num;
    }
    get type () {
        return this.#type;
    }
}

class Cat extends Animal {
    // optional prop because it exists in constructor function
    name = "SomeName";
    // optional prop because it exists in constructor function
    someProp = true;
    _oldPrivateProp;
    #privateProp;
    constructor (catName, catAge) {
        super(catAge, 'cat');
        this.name = catName;
        this._oldPrivateProp = 'oldPrivatePropValue';
        this.#privateProp = 'privatePropValue';
    }
    get privateProp() {
        return this.#privateProp
    }
    meow () {
        console.log("Meow-meow. My name is " + this.name);
    }
    getFullInfo () {
        return `I'm ${this.name} and I'm ${this.age} years old`;
    }
    // this is a static method
    // static isCat(smth) {
    //     return 'meow' in smth;
    // }
    static isCat() {
        return this.type === 'cat';
    }
} 

const cat3 = new Cat();

console.log(cat3); // Cat { name: 'SomeName', age: 0 }
cat3.name = "Kitty"; //
console.log(cat3); // Cat { name: 'Kitty', age: 0 }

const cat4 = new Cat("Freya", 3);
console.log(cat4['someProp']);
console.log(cat4['_oldPrivateProp']); //oldPrivatePropValue
//console.log(cat4[#privateProp]); // won't work

console.log(cat4.privateProp); // privatePropValue - getting private property value
console.log(cat4.age); //3
cat4.age = 4;
console.log(cat4.age); //4
cat4.meow(); //Meow-meow. My name is Freya
console.log(cat4.getFullInfo()); //I'm Freya and I'm 4 years old

console.log(Cat.isCat(cat3));// true
console.log(Cat.isCat(cat4));

const animal = new Animal(5, 'dog');