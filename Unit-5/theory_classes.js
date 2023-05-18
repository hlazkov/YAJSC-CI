class Cat {
    // optional prop because it exists in constructor function
    name = "SomeName";
    // optional prop because it exists in constructor function
    age = 0;
    someProp = true;
    _oldPrivateProp;
    #privateProp;
    constructor (catName, catAge) {
        this.name = catName;
        this.age = catAge;
        this._oldPrivateProp = 'oldPrivatePropValue';
        this.#privateProp = 'privatePropValue';
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